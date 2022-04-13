import db from "../../../db";

// export default async function (req, res) {
//   const id = req.query.id;
//   // filter API requests by method
//   if (req.method === 'GET') {
//     // Allow a blog post to get its number of likes and views
//     const params = {
//       TableName: 'posts',
//       Key: {
//         postId: id
//       }
//     };

//     db.get(params, function (err, data) {
//       if (err) {
//         console.log('Error', err);
//       } else {
//         // send the json response from the callback
//         res.json(data.Item);
//       }
//     });
//   } else if (req.method === 'PUT') {
//     // Allow a blog post to update its likes (via a button) or views (on rendering)
//   }
// }

const handler = async (req, res) => {
  console.log("working");
  const dogName = req.query.dogName;
  if (req.method == "GET") {
    console.log("get");
    const params = {
      TableName: "Dogs",
      Key: {
        Name: dogName,
      },
    };
    try {
      db.get(params, (err, data) => {
        if (err) {
          return res.send(err);
        } else {
          return res.send(data.Item);
        }
      });
    } catch ({ message }) {
      return res.send(message);
    }
  } else if (req.method == "POST") {
    console.log("post");
    const params = req.body;
    console.log(params);
    try {
      db.put(params, (err, data) => {
        if (err) {
          return res.send(err);
        } else {
          return res.send(data.Item);
        }
      });
    } catch ({ message }) {
      return res.send(message);
    }
  }
};

export default handler;
