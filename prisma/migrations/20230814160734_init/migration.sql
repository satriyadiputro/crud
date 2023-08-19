/*
  Warnings:

  - Added the required column `slug` to the `Term` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Term" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "taxonomy" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "parentId" INTEGER,
    CONSTRAINT "Term_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Term" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Term" ("description", "id", "name", "parentId", "taxonomy") SELECT "description", "id", "name", "parentId", "taxonomy" FROM "Term";
DROP TABLE "Term";
ALTER TABLE "new_Term" RENAME TO "Term";
CREATE UNIQUE INDEX "Term_slug_key" ON "Term"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
