import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EventIcon from '@mui/icons-material/Event';
import Dashboard from "../pages/Dashboard"

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
    element: <Dashboard />,
    state: "event",
    sidebarProps: {
      displayText: "Event",
      icon: <EventIcon />
    },
    child: [
      {
        path: "/event/agenda",
        element: <Dashboard />,
        state: "component.agenda",
        sidebarProps: {
          displayText: "Agenda"
        },
      },
      {
        path: "/event/berita",
        element: <Dashboard />,
        state: "component.berita",
        sidebarProps: {
          displayText: "Berita"
        }
      }
    ]
  },
  {
    path: "/document",
    element: <Dashboard />,
    state: "document",
    sidebarProps: {
      displayText: "Document",
      icon: <AssignmentIcon />
    },
    child: [
      {
        path: "/document/data-prestasi",
        element: <Dashboard />,
        state: "document.data-prestasi",
        sidebarProps: {
          displayText: "Data Prestasi"
        },
      },
      {
        path: "/document/info-mahasiswa",
        element: <Dashboard />,
        state: "document.info-mahasiswa",
        sidebarProps: {
          displayText: "Info Mahasiswa"
        }
      },
      {
        path: "/document/penerimaan-beasiswa",
        element: <Dashboard />,
        state: "document.penerimaan-beasiswa",
        sidebarProps: {
          displayText: "Penerimaan Beasiswa"
        }
      }
    ]
  },
  {
    path: "/galery",
    element: <Dashboard />,
    state: "galery",
    sidebarProps: {
      displayText: "Galery",
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