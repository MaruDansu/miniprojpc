/*
  Warnings:

  - Added the required column `imageUrl` to the `PalladiumShoe` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PalladiumShoe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "condition" TEXT NOT NULL,
    "size" INTEGER,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "PalladiumShoe_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PalladiumShoe" ("categoryId", "condition", "id", "name", "price", "size") SELECT "categoryId", "condition", "id", "name", "price", "size" FROM "PalladiumShoe";
DROP TABLE "PalladiumShoe";
ALTER TABLE "new_PalladiumShoe" RENAME TO "PalladiumShoe";



PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
