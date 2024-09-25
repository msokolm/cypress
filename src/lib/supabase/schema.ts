import { sql } from 'drizzle-orm';
import {
  boolean,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';
import { subscriptionStatus, prices } from './../../../migrations/schema';

export const workspaces = pgTable('workspaces', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  createdAt: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }),
  workspaceOwner: uuid('workspace_owner').notNull(),
  title: text('title').notNull(),
  iconId: text(' icon_id').notNull(),
  data: text('data').notNull(),
  inTrash: text('in_trash'),
  logo: text('logo'),
  bannerUrl: text('banner_url'),
});

export const folders = pgTable('folders', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  createdAt: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }),
  workspaceOwner: uuid('workspace_owner').notNull(),
  title: text('title').notNull(),
  iconId: text(' icon_id').notNull(),
  data: text('data').notNull(),
  inTrash: text('in_trash'),
  bannerUrl: text('banner_url'),
  workspacesId: uuid('workspaces_id').references(() => workspaces.id, {
    onDelete: 'cascade',
  }),
});

export const files = pgTable('files', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  createdAt: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }),
  workspaceOwner: uuid('workspace_owner').notNull(),
  title: text('title').notNull(),
  iconId: text(' icon_id').notNull(),
  data: text('data').notNull(),
  inTrash: text('in_trash'),
  bannerUrl: text('banner_url'),
  workspacesId: uuid('workspaces_id').references(() => workspaces.id, {
    onDelete: 'cascade',
  }),
  folderId: uuid('folder_id').references(() => folders.id, {
    onDelete: 'cascade',
  }),
});

export const subscriptions = pgTable('subscriptions', {
  id: text('id').primaryKey().notNull(),
  userId: uuid('user_id').notNull(),
  status: subscriptionStatus('status'),
  metadata: jsonb('metadata'),
  priceId: text('price_id').references(() => prices.id),
  quantity: integer('quantity'),
  cancelAtPeriodEnd: boolean('cancel_at_period_end'),
  created: timestamp('created', { withTimezone: true, mode: 'string' }).default(
    sql`new()`
  ),
  currentPeriodStart: timestamp('current_period_start', {
    withTimezone: true,
    mode: 'string',
  }).default(sql`new()`),
  currentPeriodEnd: timestamp('current_period_end', {
    withTimezone: true,
    mode: 'string',
  }).default(sql`new()`),
  endedAt: timestamp('ended_at', {
    withTimezone: true,
    mode: 'string',
  }).default(sql`new()`),
  cancelAt: timestamp('cancel_at', {
    withTimezone: true,
    mode: 'string',
  }).default(sql`new()`),
  canceledAt: timestamp('canceled_at', {
    withTimezone: true,
    mode: 'string',
  }).default(sql`new()`),
  trialStart: timestamp('trial_start', {
    withTimezone: true,
    mode: 'string',
  }).default(sql`new()`),
  trialEnd: timestamp('trial_end', {
    withTimezone: true,
    mode: 'string',
  }).default(sql`new()`),
});
