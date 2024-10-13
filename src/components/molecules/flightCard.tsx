import React, { useState } from "react";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Text } from "../atoms/text";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import Category from "../atoms/category";
import categoriesData from "@/utils/const/categoriesData";

const FlightCard = () => {
  const [selectedCategory, setSelectedCategory] = useState(categoriesData[0]);

  return (
    <div className="bg-white shadow-md rounded-lg px-6 py-6 sm:py-8 lg:px-8 grid grid-cols-2 transition-colors shadow-primary">
      <div className="grid grid-rows-1 items-center space-y-3">
        <div className="flex items-center font-bold space-x-3">
          <span>
            <Icon icon="ion:paper-plane" className="h-6 w-6 text-primary" />
          </span>
          <Text text="City: " />
        </div>
        <div className="flex items-center font-bold space-x-3">
          <span>
            <Icon icon="radix-icons:calendar" className="h-6 w-6 text-primary" />
          </span>
          <Text text="Date and time: " />
        </div>
        <div className="flex items-center font-bold space-x-3">
          <span>
            <Icon icon="icon-park-outline:transfer" className="h-6 w-6 text-primary" />
          </span>
          <Text text="Number of scales: " />
        </div>
        <div className="flex items-center font-bold space-x-3">
          <span>
            <Icon icon="fluent-emoji-high-contrast:seat" className="h-6 w-6 text-primary" />
          </span>
          <Text text="Category: " />
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">{selectedCategory.title}</Button>
            </DialogTrigger>
            <DialogContent>
              <div className="flex justify-center items-center">
                <Category categories={categoriesData} setSelectedCategory={setSelectedCategory} />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="grid grid-rows-1 justify-end">
        <div className="flex justify-end font-bold">
          <Text text={`USD ${selectedCategory.price}`} />
        </div>
        <div className="flex mt-2">
          <Button>Reservar</Button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
