import React, { useRef, useState } from 'react'
import { CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card'
import { Input } from '../ui/input'
import { SelectContent, Select,  SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import { X } from 'lucide-react'
import { Upload } from 'lucide-react'
import { Loader2 } from 'lucide-react'
import { Textarea } from '../ui/textarea'

const CreateProduct = () => {

  const [currentColor, setCurrentColor] = useState("#000000")
  const [colors, setColors] = useState([])
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fileInputRef = useRef(null);
  const HandleImageUpload = (e) => {}

  const addColor = () => {
    if(!colors.includes(currentColor)){
      setColors([...colors, currentColor])
    }
  }

  const removeColor = (colorToRemove) => {
    setColors(colors.filter((color) => color !== colorToRemove));
  }

  const removeImage = (indexToRemove) => {
    setImages(images.filter((_, index) => index !== indexToRemove))
  }

  return (


    <div className="w-full max-w-2xl -z-10">
      <CardHeader>
        <CardTitle className="text-2xl">Add New Product</CardTitle>
        <CardDescription>
          Enter the details for the new product you want to add to your e-commerce store
        </CardDescription>
      </CardHeader>

      <form>
        <div className="flex flex-col lg:flex-row lg:w-[70vw]">
          <CardContent className="w-full space-y-3">
            <div className="space-y-2">
              <label htmlFor="name">Product Name</label>
              <Input id="name" name="name" placeholder="Enter product name" ></Input>
            </div>

            <div className="space-y-2">
              <label htmlFor="description">Description</label>
              <Textarea rows={4} id="description" name="description" placeholder="Enter product description" ></Textarea>
            </div>

            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <Input id="price" type="number" name="price" step="0.01" min="0" placeholder="0.00" ></Input>
            </div>

            <div className="space-y-2">
              <label htmlFor="stock">Stock</label>
              <Input id="stock" type="number" name="stock"  min="0" placeholder="20" ></Input>
            </div>

          </CardContent>

          <CardContent className="w-full">
            <div className="space-y-2 space-y-3">
              <label htmlFor="category">Category </label>
              <Select name="category"  >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category"></SelectValue>
                </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Headset">Headset</SelectItem>
                    <SelectItem value="Keyboard">Keyboard</SelectItem>
                    <SelectItem value="Mouse">Mouse</SelectItem>
                  </SelectContent>
                
              </Select>
            </div>

            <div className="space-y-3">
              <label htmlFor="colors">Colors</label>
                <div className="fex flex-items-center space-x-2">
                  <input 
                  id="color" 
                  type="color"
                  value={currentColor}
                  onChange={(e) => setCurrentColor(e.target.value)} 
                  className="w-12 h-12 p-1 rounded-md"
                  />
                  <Button 
                  variant="outline" 
                  onClick={(e) => {
                    e.preventDefault(); // to Prevent form submission on button click
                    addColor();
                  }}
                  >Add Color</Button>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-100 rounded-full pl-2 pr-1 py-1"
                >

                  <div
                    className="w-4 h-4 rounded-full mr-2"
                    style={{background: color}}
                  ></div>

                  <span className="text-sm mr-1 dark:text-slate-900">{color}</span>
                  <Button 
                  variant="ghost" 
                  className="h-6 w-6 p-8 rounded-full"
                  onClick={(e) => {
                    e.preventDefault();
                    removeColor(color);
                  }}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove Color</span>
                  </Button>
                </div>
              ))}
            </div>

            <div className="space-y-2 ">
                <label htmlFor="images">Product images</label>
                <div className="flex flex-wrap gap-4">
                  <div className="relative">
                    <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg" 
                    alt="{`Product image ${1}`}" 
                    width={100}
                    height={100}
                    className="rounded-md object-cover"
                    />

                    <Button 
                    variant="destructive" 
                    size="icon" 
                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full" 
                    onClick = {(e) => {
                      e.preventDefault();
                      removeImage(0);
                    }}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove image</span>
                    </Button>
                  </div>

                  {/* {images.length > 4 && ( */}

                    <Button 
                    className="w-[100px] h-[100px]" 
                    variant="outline"
                    onClick = {() => fileInputRef.current?.click()}
                    >
                      <Upload className="h-6 w-6" />
                      <span className="sr-only">Upload Images</span>
                    </Button>
                  {/* )} */}

                </div>
                <Input type="file" id="images" name="images" accept="images/*" multiple
                className="hidden"
                onChange={HandleImageUpload}
                ref={fileInputRef}
                />

                <p className="text-sm text-muted-foreground mt-2">Upload up to 4 images. Supported format: JPG, PNG, JPEG </p>
            </div>
            
          </CardContent>
          
        </div>

        <CardFooter className="pt-4 ">
              <Button type="submit" className="w-full " disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animated-spin" />}
                {isLoading ? "Adding Product..." : "Add Product"}
              </Button>
            </CardFooter>

      </form>
    </div>
  )
}

export default CreateProduct