CREATE TABLE IF NOT EXISTS "subscriptions" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"status" "subscription_status",
	"metadata" jsonb,
	"price_id" text,
	"quantity" integer,
	"cancel_at_period_end" boolean,
	"created" timestamp with time zone DEFAULT new(),
	"current_period_start" timestamp with time zone DEFAULT new(),
	"current_period_end" timestamp with time zone DEFAULT new(),
	"ended_at" timestamp with time zone DEFAULT new(),
	"cancel_at" timestamp with time zone DEFAULT new(),
	"canceled_at" timestamp with time zone DEFAULT new(),
	"trial_start" timestamp with time zone DEFAULT new(),
	"trial_end" timestamp with time zone DEFAULT new()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_price_id_prices_id_fk" FOREIGN KEY ("price_id") REFERENCES "prices"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
