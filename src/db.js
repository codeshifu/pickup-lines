const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const fs = require('fs');
const path = require('path');
const filePath = path.resolve('./server-data/lines.json');

const fileExists = fs.existsSync(filePath);

if (fileExists) {
  fs.unlinkSync(filePath);
}

const adapter = new FileSync(filePath);
let db = lowdb(adapter);
const { promisify } = require('util');
const shorId = require('shortid');

const defaultData = [
  "Hey, my name's Microsoft. Can I crash at your place tonight?",
  'Baby, you make my floppy disk turn into a hard drive',
  'Can I dereference my pointer inside your protected area?',
  'This must be the 8th castle because I just found my princess.',
  'I think my heart just lagged.',
  'Are you an exception? I bet I can catch you.',
  'She fell in love with a programmer. Now everything is coded.',
  'I used to think love() was abstract, until you implemented it in MyHeart.',
  "Are you a keyboard? Because you're my type!",
  "I'm not staring, I'm just stuck in a loop.",
  "Hey baby, there's an OverflowException in my pants, care to handle it for me?",
  "You are the SDK in my life. I won't compile without you.",
  'You are my loop condition. I keep coming back to you.',
  "You must be Windows 95 because you've got me feeling so unstable.",
  'You are my superclass: you define what I can do.',
  'Can you be my private variable? I want to be the only one with access to you.',
  'You had me at "Hello, World!"',
  'You auto-complete me',
  "Is your name Wi-Fi? Because I'm feeling a connection.",
  'Are you sitting on the F5 key? Because your backside is refreshing.',
  "Are you on Netflix? Because I'd stream you all night.",
  "Is your network encrypted? I'm looking to hack.",
  "Emojis can't describe the way I feel about you.",
  "I'll be your seeder if you'll be my leecher and we can torrent all night long.",
  "You're so hot, I'd Instagram you without a filter.",
  'Are you still using Internet Explorer, you must like it slow and dangerous.',
  "Come to my 127.0.0.1 and I'll give you sudo access.",
  "Isn't your e-mail address beautifulgirl@mydreams.com?",
  'My love for you is like dividing by zero-- it cannot be defined.',
  'If you were a triangle you would be acute one.',
  "You're sweeter than 3.14",
  "Are you the square root of -1? Because you can't be real.",
  "I'm not being obtuse but you're acute girl.",
  "I need some answers for my math homework. Quick. What's your number?",
  'I want our love to be like pi, irrational and never ending.',
  'If i was cosin squared and you were sin squared we would be one.',
  'Can I plug my solution into your equation?',
  "Forget hydrogen, you're my number one element.",
  'You must be made of uranium and iodine because all I can see is U and I together.',
  'Is there a science room nearby, or am I just sensing the chemistry between us?',
  "My name's Bond. Covalent Bond.",
  "Are you made of Fluorine, Iodine, and Neon? 'Cause you are F-I-Ne.",
  'Chemists do it on the table periodically.',
  'Do you have 11 protons? Cause your sodium fine.',
  'Are you made of beryllium, gold, and titanium? You must be because you are BeAuTi-ful.'
];

db.defaults({
  data: defaultData
}).write();

const errorFirstDB = (db, cb) => {
  if (!db) cb(new Error('DB is required.'));
  else cb(null, db);
};

const dbPromise = promisify(errorFirstDB);
module.exports = {
  db,
  dbPromise
};
