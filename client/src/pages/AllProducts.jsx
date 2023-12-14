import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import SlideBar from "../components/SlideBar";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const AllProducts = () => {
  const [open, setOpen] = useState(0);
  const [dashboardContentVisible, setDashboardContentVisible] = useState({
    1: true,
    2: true,
  });

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
    setDashboardContentVisible({
      ...dashboardContentVisible,
      [value]: !dashboardContentVisible[value],
    });
  };

  return (
    <Card className="max-w-[20rem] p-4 shadow-xl bg-blue-gray-900/5">
      <div className="mb-4 p-4">
        <Typography variant="h5" color="blue-gray" className="text-white">
          Filters
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3 flex items-center cursor-pointer transition-all duration-300 hover:bg-blue-gray-700"
            >
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5 text-blue-gray-300" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="ml-2 font-normal text-white"
              >
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          {dashboardContentVisible[1] && (
            <AccordionBody className="py-1 ml-5">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon
                      strokeWidth={3}
                      className="h-3 w-5 text-blue-gray-300"
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="ml-2 text-white">
                    Analytics
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon
                      strokeWidth={3}
                      className="h-3 w-5 text-blue-gray-300"
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="ml-2 text-white">
                    Reporting
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon
                      strokeWidth={3}
                      className="h-3 w-5 text-blue-gray-300"
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="ml-2 text-white">
                    Projects
                  </Typography>
                </ListItem>
              </List>
            </AccordionBody>
          )}
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3 flex items-center cursor-pointer transition-all duration-300 hover:bg-blue-gray-700"
            >
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5 text-blue-gray-300" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="ml-2 font-normal text-white"
              >
                E-Commerce
              </Typography>
            </AccordionHeader>
          </ListItem>
          {dashboardContentVisible[2] && (
            <AccordionBody className="py-1 ml-5">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon
                      strokeWidth={3}
                      className="h-3 w-5 text-blue-gray-300"
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="ml-2 text-white">
                    Orders
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon
                      strokeWidth={3}
                      className="h-3 w-5 text-blue-gray-300"
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="ml-2 text-white">
                    Products
                  </Typography>
                </ListItem>
              </List>
            </AccordionBody>
          )}
        </Accordion>
        <ListItem className="mt-2">
          <ListItemPrefix>
            <SlideBar />
          </ListItemPrefix>
        </ListItem>
      </List>
    </Card>
  );
};

export default AllProducts;
