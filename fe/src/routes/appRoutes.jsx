import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EventIcon from '@mui/icons-material/Event';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Dashboard from "../pages/Dashboard"
import { GaleryData } from "../pages/Galery";
import { BeritaData } from "../pages/Berita";
import LayoutEvent from "../container/LayoutEvent";
import { AgendaData } from "../pages/Agenda";
import LayoutDocument from "../container/LayoutDocument";
import { InfoBeasiswaData } from "../pages/InfoBeasiswa";
import { PenerimaBeasiswaData } from "../pages/PenerimaBeasiswa";
import { PrestasiData } from "../pages/Prestasi";

const appRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardIcon />
    }
  },
  {
    path: "/event",
    element: <LayoutEvent />,
    state: "event",
    sidebarProps: {
      displayText: "Event",
      icon: <EventIcon />
    },
    child: [
      {
        path: "/event/agenda",
        element: <AgendaData />,
        state: "event.agenda",
        sidebarProps: {
          displayText: "Agenda",
          icon: <EventAvailableIcon />
        },
      },
      {
        path: "/event/berita",
        element: <BeritaData />,
        state: "event.berita",
        sidebarProps: {
          displayText: "Berita",
          icon : <NewspaperIcon />
        }
      }
    ]
  },
  {
    path: "/document",
    element: <LayoutDocument />,
    state: "document",
    sidebarProps: {
      displayText: "Document",
      icon: <AssignmentIcon />
    },
    child: [
      {
        path: "/document/data-prestasi",
        element: <PrestasiData />,
        state: "document.data-prestasi",
        sidebarProps: {
          displayText: "Data Prestasi"
        },
      },
      {
        path: "/document/info-mahasiswa",
        element: <InfoBeasiswaData />,
        state: "document.info-mahasiswa",
        sidebarProps: {
          displayText: "Info Mahasiswa"
        }
      },
      {
        path: "/document/penerimaan-beasiswa",
        element: <PenerimaBeasiswaData />,
        state: "document.penerimaan-beasiswa",
        sidebarProps: {
          displayText: "Penerimaan Beasiswa"
        }
      }
    ]
  },
  {
    path: "/data-galery",
    element: <GaleryData />,
    state: "data-galery",
    sidebarProps: {
      displayText: "Data Galery",
      icon: <CollectionsBookmarkIcon />
    }
  },
  {
    path: "/userManagement",
    element: <Dashboard />,
    state: "userManagement",
    sidebarProps: {
      displayText: "User Management",
      icon: <ManageAccountsIcon />
    }
  }
];

export default appRoutes;