-- CreateTable
CREATE TABLE "visitors" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(30) NOT NULL,
    "email" TEXT NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "message" VARCHAR(1000) NOT NULL,

    CONSTRAINT "visitors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "visitors_email_key" ON "visitors"("email");
