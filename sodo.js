/*
 Navicat Premium Data Transfer

 Source Server         : soso
 Source Server Type    : MongoDB
 Source Server Version : 40208
 Source Host           : 46.4.113.28:19888
 Source Schema         : sodo

 Target Server Type    : MongoDB
 Target Server Version : 40208
 File Encoding         : 65001

 Date: 25/08/2020 17:01:45
*/


// ----------------------------
// Collection structure for books
// ----------------------------
db.getCollection("books").drop();
db.createCollection("books");
db.getCollection("books").createIndex({
    BookName: NumberInt("1")
}, {
    name: "BookName_1"
});
db.getCollection("books").createIndex({
    Author: NumberInt("1")
}, {
    name: "Author_1"
});
db.getCollection("books").createIndex({
    SortId: NumberInt("1")
}, {
    name: "SortId_1"
});
db.getCollection("books").createIndex({
    Degree: NumberInt("1")
}, {
    name: "Degree_1"
});
db.getCollection("books").createIndex({
    Clicks: NumberInt("1")
}, {
    name: "Clicks_1"
});
db.getCollection("books").createIndex({
    Votes: NumberInt("1")
}, {
    name: "Votes_1"
});
db.getCollection("books").createIndex({
    Sizes: NumberInt("1")
}, {
    name: "Sizes_1"
});
db.getCollection("books").createIndex({
    ChapterCount: NumberInt("1")
}, {
    name: "ChapterCount_1"
});
db.getCollection("books").createIndex({
    Status: NumberInt("1")
}, {
    name: "Status_1"
});
db.getCollection("books").createIndex({
    UpdateTime: NumberInt("1")
}, {
    name: "UpdateTime_1"
});
db.getCollection("books").createIndex({
    BookImg: NumberInt("1")
}, {
    name: "BookImg_1"
});
db.getCollection("books").createIndex({
    Star: NumberInt("1")
}, {
    name: "Star_1"
});

// ----------------------------
// Documents of books
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("sodo");
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for category
// ----------------------------
db.getCollection("category").drop();
db.createCollection("category");
db.getCollection("category").createIndex({
    SortId: NumberInt("1")
}, {
    name: "SortId_1"
});

// ----------------------------
// Documents of category
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("sodo");
db.getCollection("category").insert([ {
    _id: ObjectId("5e4e152fbcbb00458a557f96"),
    SortId: 1,
    SortName: "玄幻魔法",
    Key: "xuanhuan"
} ]);
db.getCollection("category").insert([ {
    _id: ObjectId("5e4e1553bcbb00458a557f97"),
    SortId: 2,
    SortName: "武俠修真",
    Key: "wuxia"
} ]);
db.getCollection("category").insert([ {
    _id: ObjectId("5e4e1574bcbb00458a557f98"),
    SortId: 3,
    SortName: "都市言情",
    Key: "yanqing"
} ]);
db.getCollection("category").insert([ {
    _id: ObjectId("5e4e1598bcbb00458a557f99"),
    SortId: 4,
    SortName: "曆史軍事",
    Key: "lishi"
} ]);
db.getCollection("category").insert([ {
    _id: ObjectId("5e4e16ddbcbb00458a557f9a"),
    SortId: 5,
    SortName: "網遊競技",
    Key: "wangyou"
} ]);
db.getCollection("category").insert([ {
    _id: ObjectId("5e4e170dbcbb00458a557f9b"),
    SortId: 6,
    SortName: "科幻小說",
    Key: "kehuan"
} ]);
db.getCollection("category").insert([ {
    _id: ObjectId("5e4e177ebcbb00458a557f9c"),
    SortId: 7,
    SortName: "恐怖靈異",
    Key: "lingyi"
} ]);
db.getCollection("category").insert([ {
    _id: ObjectId("5e4f78ec7582e57efd7150a3"),
    SortId: 8,
    SortName: "同人漫畫",
    Key: "tongren"
} ]);
db.getCollection("category").insert([ {
    _id: ObjectId("5f1c17dd95a1240bbd52fb93"),
    SortId: 9,
    SortName: "其他小說",
    Key: "qita"
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for chapter
// ----------------------------
db.getCollection("chapter").drop();
db.createCollection("chapter");
db.getCollection("chapter").createIndex({
    ChapterLists: NumberInt("1")
}, {
    name: "ChapterLists_1"
});

// ----------------------------
// Documents of chapter
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("sodo");
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for chaptertxt
// ----------------------------
db.getCollection("chaptertxt").drop();
db.createCollection("chaptertxt");
db.getCollection("chaptertxt").createIndex({
    BookId: NumberInt("1")
}, {
    name: "BookId_1"
});
db.getCollection("chaptertxt").createIndex({
    LastTime: NumberInt("1")
}, {
    name: "LastTime_1"
});

// ----------------------------
// Documents of chaptertxt
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("sodo");
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for comment
// ----------------------------
db.getCollection("comment").drop();
db.createCollection("comment");
db.getCollection("comment").createIndex({
    BookId: NumberInt("1")
}, {
    name: "BookId_1"
});
db.getCollection("comment").createIndex({
    UserId: NumberInt("1")
}, {
    name: "UserId_1"
});
db.getCollection("comment").createIndex({
    ChapterId: NumberInt("1")
}, {
    name: "ChapterId_1"
});
db.getCollection("comment").createIndex({
    ParseId: NumberInt("1")
}, {
    name: "ParseId_1"
});

// ----------------------------
// Documents of comment
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("sodo");
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for cover
// ----------------------------
db.getCollection("cover").drop();
db.createCollection("cover");

// ----------------------------
// Documents of cover
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("sodo");
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for marks
// ----------------------------
db.getCollection("marks").drop();
db.createCollection("marks");
db.getCollection("marks").createIndex({
    Marks: NumberInt("1")
}, {
    name: "Marks_1"
});

// ----------------------------
// Documents of marks
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("sodo");
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for star
// ----------------------------
db.getCollection("star").drop();
db.createCollection("star");
db.getCollection("star").createIndex({
    Users: NumberInt("1")
}, {
    name: "Users_1"
});

// ----------------------------
// Documents of star
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("sodo");
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for user
// ----------------------------
db.getCollection("user").drop();
db.createCollection("user");
db.getCollection("user").createIndex({
    GID: NumberInt("1")
}, {
    name: "GID_1"
});

// ----------------------------
// Documents of user
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("sodo");
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for webs
// ----------------------------
db.getCollection("webs").drop();
db.createCollection("webs");

// ----------------------------
// Documents of webs
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("sodo");
session.commitTransaction(); session.endSession();
