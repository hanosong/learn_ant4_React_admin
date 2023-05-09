import React from "react";
import { Navigate } from "react-router-dom";
const Login = React.lazy(() => import("@/views/login-view/index.jsx"));
const FormView = React.lazy(() => import("@/views/form-view/index.jsx"));
const TableView = React.lazy(() => import("@/views/table-view/index.jsx"));
const RichTextView = React.lazy(() => import("@/views/rich-text-view/index.jsx"));
const Other = React.lazy(() => import("@/views/other-view/index.jsx"));
const routes = [
  {
    path: "/",
    element: <Navigate to="/login"/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/form",
    element: <FormView />,
  },
  {
    path: "/table",
    element: <TableView />,
  },
  {
    path: "/richText",
    element: <RichTextView />,
  },
  {
    path: "/other",
    element: <Other />,
  },
];
export default routes;
