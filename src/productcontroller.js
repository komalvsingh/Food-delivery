import Product from "./productmodel.js";

export const addproduct = async (req, res, next) => {
  try {
    const { name, image, price, description, category, rating, review } = req.body;

    if (!name || !image || !price || !description || !category || rating === undefined || review === undefined) {
      return res.status(400).json({ success: false, error: 'All fields are required' });
    }

    const product = await Product.create({
      name, image, price, description, category, rating, review
    });

    res.status(201).json({
      success: true,
      data: product
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


export const getproduct = async(req,res) =>{
  try {
    const product = await Product.find();
    res.status(200).json({success:true, data:product})
    } catch (error) {
      res.status(500).json({success:false, error:error.message})
      }
      }

export const updateProduct = async (req, res) => {
        try {
          const { id } = req.params;
          const { name, image, price, description, category, rating, review } = req.body;
      
          // Check if all required fields are present
          if (!name || !image || !price || !description || !category || rating === undefined || review === undefined) {
            return res.status(400).json({ success: false, error: 'All fields are required' });
          }
      
          // Find and update the product
          const product = await Product.findByIdAndUpdate(
            id,
            { name, image, price, description, category, rating, review },
            { new: true }
          );
      
          // Check if the product was found and updated
          if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
          }
      
          res.status(200).json({ success: true, data: product });
        } catch (error) {
          res.status(500).json({ success: false, error: error.message });
        }
      };
      
      export const getproid = async(req,res) => {
        try {
          const { id } = req.params;
          const product = await Product.findById(id);
          res.status(200).json({success:true, data:product})
          } catch (error) {
            res.status(500).json({success:false, error:error.message})
            }
            }

      
      



