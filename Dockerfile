# ------------------------------------------------------------
# 1. Dependencies Stage
# ------------------------------------------------------------
FROM node:22-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# ------------------------------------------------------------
# 2. Builder Stage
# ------------------------------------------------------------
FROM node:22-alpine AS builder
WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ------------------------------------------------------------
# 3. Production Runner Stage (Google Cloud Run Ready)
# ------------------------------------------------------------
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"
ENV NEXT_TELEMETRY_DISABLED=1

# Cloud Run security best practice: run as non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy static public assets & markdown policies
COPY --from=builder /app/public ./public
COPY --from=builder /app/policies ./policies

# Set up prerender cache directory permissions
RUN mkdir -p .next/cache && chown -R nextjs:nodejs /app

# Copy Next.js standalone server, static bundles, and launcher
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/serve.js ./serve.js

USER nextjs

EXPOSE 8080

# Starts the production server on 0.0.0.0:${PORT} (defaults to 8080)
CMD ["node", "serve.js"]
