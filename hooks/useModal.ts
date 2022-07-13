import { useCallback } from "react";
import shallow from "zustand/shallow";
import { useStore, ModalView } from "state";

export const useModal = () => {
  const [activeModal, setActiveModal] = useStore(
    (state) => [state.activeModal, state.setActiveModal],
    shallow
  );

  const toggleModal = useCallback(
    (modal: ModalView | null) => {
      if (activeModal === modal) return;

      setActiveModal(modal);
    },
    [activeModal, setActiveModal]
  );

  const isCurrencyModalOpen = activeModal === ModalView.Currency;
  const isBlockchainModalOpen =
    activeModal === ModalView.Fromchain || activeModal === ModalView.ToChain;

  const toggleCurrencyModal = () => toggleModal(ModalView.Currency);
  const toggleFromChainModal = () => toggleModal(ModalView.Fromchain);
  const toggleToChainModal = () => toggleModal(ModalView.ToChain);
  const dismissModal = () => toggleModal(null);

  return {
    dismissModal,
    toggleModal,
    toggleFromChainModal,
    toggleToChainModal,
    toggleCurrencyModal,
    isBlockchainModalOpen,
    isCurrencyModalOpen,
  };
};
