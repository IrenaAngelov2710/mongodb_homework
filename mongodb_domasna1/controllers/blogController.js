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

// Prikazuvanje na site blogs
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

// Prikazuvanje na blog so nekoj title
const getBlogWithTitle = async (req, res) => {
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

// Prikazuvanje na blog so nekoe id
const getBlog = async (req, res) => {
    try{
        console.log(req.params);
        const blog = await Blog.findById(req.params.id);

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

// Promena nekoja vo id sto veke go imame
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

  // Brisenje na nekoj blog so odredeno id
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
    getBlogWithTitle,
    getBlog,
    updateBlog, 
    deleteBlog
};