import React from "react";

import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";

import {
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { Section, Header } from "react-aria-components";

function Navmenu() {
  return (
    <MenuTrigger>
      <Button aria-label="Menu" preventFocusOnPress>
        <Bars3Icon className="nav-item h-6 w-6" />
      </Button>
      <Popover>
        <Menu className="w-64 rounded bg-white p-1 dark:bg-gray-800">
          <Section>
            <Header className="navmenu-header">Pages</Header>
            <MenuItem className="navmenu-item" href="/conference_materials">
              Conference Materials
            </MenuItem>
            <MenuItem className="navmenu-item" href="/topics_and_committees">
              Topics and Committees
            </MenuItem>
            <MenuItem href="/chair_and_country_forms" className="navmenu-item">
              Chair and Country Forms
            </MenuItem>
            <MenuItem href="/venue" className="navmenu-item">
              Venue
            </MenuItem>
            <MenuItem href="/schedule" className="navmenu-item">
              Schedule
            </MenuItem>
            <MenuItem href="/contact" className="navmenu-item">
              Contact
            </MenuItem>
            <MenuItem
              onAction={() => window.open("https://cmis.ac.th/", "_blank")}
              className="navmenu-item flex items-center"
            >
              CMIS
              <ArrowTopRightOnSquareIcon className="ml-2 inline-block h-4 w-4" />
            </MenuItem>
          </Section>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}

export default Navmenu;
