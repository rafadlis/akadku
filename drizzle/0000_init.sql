CREATE TYPE "public"."attendance_status" AS ENUM('hadir', 'tidak hadir', 'tidak yakin');--> statement-breakpoint
CREATE TABLE "guestbook" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"message" text NOT NULL,
	"attendance_status" "attendance_status" NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
