import { create } from "zustand";

interface UiStore {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;

  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;

  selectedProject: string | null;
  setSelectedProject: (id: string | null) => void;
}

export const useUiStore = create<UiStore>((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (mobileMenuOpen) => set({ mobileMenuOpen }),

  modalOpen: false,
  setModalOpen: (modalOpen) => set({ modalOpen }),

  selectedProject: null,
  setSelectedProject: (id) => set({ selectedProject: id }),
}));
