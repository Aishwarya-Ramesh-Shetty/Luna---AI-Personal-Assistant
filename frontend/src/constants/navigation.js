import {
  MessageSquare,
  Brain,
  FolderOpen,
  CheckSquare,
  Shield,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    name: "Chat",
    path: "/",
    icon: MessageSquare,
  },
  {
    name: "Memory",
    path: "/memory",
    icon: Brain,
  },
  {
    name: "Files",
    path: "/files",
    icon: FolderOpen,
  },
  {
    name: "Tasks",
    path: "/tasks",
    icon: CheckSquare,
  },
  {
    name: "Privacy",
    path: "/privacy",
    icon: Shield,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];