// Povikuvanje na blog modelot za komunikacija so databazata
const Blog = require("../model/blogModel");

// Kreiranje na nov dokument vo kolekcijata
const createBlog = async (req, res) => {
    try{
        const newBlog = await Blog.create(req.body);
        res.send(newBlog);
    }
    catch(err) {
        res.status(400).json ({
            status: "fail",
            message: err,
        });
    }
};

// Prikazuvanje na site dokumenti vo kolekcijata
const getAllBlogs = async (req, res) => {
    try{
        const blogs = await Blog.find();

        res.status(200).json({
            status: "Success",
            data: {
                blogs: blogs,
            },
        });
    }
    catch(err) {
        res.status(404).json ({
            status: "fail",
            message: err,
        });
    }
};


// const getAllBlogs = async (req, res) => {
//   try {
//     console.log(req.query);
//     // pravime kopija od objektot ne sakame da go modificirame originalnoto query
//     const queryObj = { ...req.query };
//     // ovoj objekt go konvertirame vo string
//     let queryString = JSON.stringify(queryObj);
//     // go modificirame stringot
//     queryString = queryString.replace(
//       /\b(gte|gt|lte|lt)\b/g,
//       (match) => `$${match}`
//     );
//     // od koga ke go modificirame go vrakame nazad vo objekt
//     const query = JSON.parse(queryString);
//     // so find metodagta gi zemame site dokumenti od edna kolekcija
//     const blogs = await Blog.find(query);
     
//     res.status(200).json({
//       status: "Success",
//       data: {
//         blogs: blogs,
//       },
//     }); 
//   }
//   catch(err){
//     res.status(404).json({
//       status: "fail",
//       message: err
//     });
//   }
// };

// Prikazuvanje na nekoj dokument vo kolekcijata po title
const getOneBlog = async (req, res) => {
  try{
      console.log(req.params);
      const blog = await Blog.findOne({ title: req.params.title });

      res.status(200).json({
          status: "Success",
          data: {
              blog,
          },
      });
  }
  catch(err) {
      res.status(404).json ({
          status: "fail",
          message: err,
      });
  }
};

// Prikazuvanje na nekoj dokument vo kolekcijata po ID
// const getOneBlog = async (req, res) => {
//     try{
//         console.log(req.params);
//         const blog = await Blog.findById(req.params.id);

//         res.status(200).json({
//             status: "Success",
//             data: {
//                 blog,
//             },
//         });
//     }
//     catch(err) {
//         res.status(404).json ({
//             status: "fail",
//             message: err,
//         });
//     }
// };

// Promena na nekoj dokument vo kolekcijata po ID
 const updateBlog = async (req, res) => {
    try {
      const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
  
      res.status(200).json({
        status: "success",
        data: {
          updatedBlog,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };

  // Brisenje na nekoj dokument vo kolekcijata po ID
  const deleteBlog = async (req, res) => {
    try {
      await Blog.findByIdAndDelete(req.params.id);
  
      res.status(204).json({
        status: "success",
        data: null,
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };

module.exports = {
    createBlog,
    getAllBlogs,
    getOneBlog,
    getOneBlog,
    updateBlog, 
    deleteBlog
};