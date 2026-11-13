import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Access = "Public" | "Charter 150";

export type Session = {
  id: string;
  title: string;
  date: string;
  time: string;
  host: string;
  tag: string;
};

export const sessions: Session[] = [
  {
    id: "rate-conversation",
    title: "FOC Academy 101: The Rate Conversation",
    date: "2024-11-07",
    time: "7:00 PM CET",
    host: "Megan Jennings",
    tag: "Past session",
  },
  {
    id: "first-call-sheet",
    title: "Reading Your First Call Sheet",
    date: "2026-07-14",
    time: "6:00 PM CET",
    host: "FOC Community",
    tag: "Public Live",
  },
  {
    id: "crew-relationships",
    title: "Building Lasting Crew Relationships",
    date: "2026-07-23",
    time: "7:30 PM CET",
    host: "FOC Community",
    tag: "Charter roundtable",
  },
];

type AppContextValue = {
  access: Access;
  setAccess: (access: Access) => void;
  dark: boolean;
  toggleTheme: () => void;
  saved: string[];
  toggleSaved: (id: string) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [access, setAccess] = useState<Access>("Public");
  const [dark, setDark] = useState(false);
  const [saved, setSaved] = useState<string[]>(["rate-conversation"]);

  const value = useMemo(
    () => ({
      access,
      setAccess,
      dark,
      toggleTheme: () => setDark((value) => !value),
      saved,
      toggleSaved: (id: string) =>
        setSaved((items) =>
          items.includes(id) ? items.filter((item) => item !== id) : [...items, id],
        ),
    }),
    [access, dark, saved],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used inside AppProvider");
  return context;
}
