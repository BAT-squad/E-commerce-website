import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import SlideBar from "./SlideBar";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const FilterB = ({ handleBrand, handleCategory, fetchItemsUnderPrice }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleOpenAccordion = (accordionId) => {
    setOpenAccordion(openAccordion === accordionId ? null : accordionId);
  };

  const renderAccordion = (id, icon, title, items, onItemClick) => (
    <Accordion
      key={id}
      open={openAccordion === id}
      icon={
        <ChevronDownIcon
          strokeWidth={2.5}
          className={`mx-auto h-4 w-4 transition-transform ${
            openAccordion === id ? "rotate-180" : ""
          }`}
        />
      }
    >
      <ListItem className="p-0">
        <AccordionHeader
          onClick={() => handleOpenAccordion(id)}
          className="border-b-0 p-3 flex items-center cursor-pointer transition-all duration-300 hover:bg-blue-gray-700"
        >
          <ListItemPrefix>
            {icon === "PresentationChartBarIcon" ? (
              <PresentationChartBarIcon className="h-5 w-5 text-blue-gray-300" />
            ) : (
              <ShoppingBagIcon className="h-5 w-5 text-blue-gray-300" />
            )}
          </ListItemPrefix>
          <Typography color="blue-gray" className="ml-2 font-normal text-white">
            {title}
          </Typography>
        </AccordionHeader>
      </ListItem>
      {openAccordion === id && (
        <AccordionBody className="py-1 ml-5">
          <List className="p-0">
            {items.map((item) => (
              <ListItem key={item} onClick={() => onItemClick(item)}>
                <Typography color="blue-gray" className="ml-2 text-white">
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </AccordionBody>
      )}
    </Accordion>
  );

  return (
    <Card className="max-w-[20rem] p-4 shadow-xl bg-blue-gray-900/5">
      <div className="mb-4 p-4">
        <Typography variant="h5" color="blue-gray" className="text-white">
          Filters
        </Typography>
      </div>
      {renderAccordion(
        1,
        "PresentationChartBarIcon",
        "Brand",
        ["NIKE", "ADIDAS", "PUMA"],
        handleBrand
      )}
      {renderAccordion(
        2,
        "ShoppingBagIcon",
        "Category",
        ["Shoes", "Slipper"],
        handleCategory
      )}
      <ListItem className="mt-2">
        <ListItemPrefix>
          <SlideBar fetchItemsUnderPrice={fetchItemsUnderPrice} />
        </ListItemPrefix>
      </ListItem>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
    </Card>
  );
};

export default FilterB;
