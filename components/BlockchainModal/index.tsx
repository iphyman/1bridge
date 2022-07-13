import {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
  ChangeEvent,
  RefObject,
} from "react";
import shallow from "zustand/shallow";
import { VscChromeClose } from "react-icons/vsc";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import type { Blockchain } from "types";
import useDebounce from "hooks/useDebounce";
import { useStore, ModalView } from "state";
import {
  ModalContentWrapper,
  Column,
  Row,
  RowBetween,
  AutoColumn,
  Text,
  SearchInput,
  Separator,
} from "styles/styleds";
import { IconButton } from "components/Button";
import { useModal } from "hooks/useModal";
import { getFilter } from "../../utils";
import { Modal } from "../Modal";
import { ChainList } from "./ChainList";

export default function ChainListModal() {
  const [
    activeModal,
    blockchains,
    fromChain,
    toChain,
    setFromChain,
    setToChain,
  ] = useStore(
    (state) => [
      state.activeModal,
      state.blockchains,
      state.fromChain,
      state.toChain,
      state.setFromChain,
      state.setToChain,
    ],
    shallow
  );

  const { isBlockchainModalOpen, dismissModal } = useModal();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedQuery = useDebounce(searchQuery, 200);

  const inputRef = useRef<HTMLInputElement>();
  const fixedSizedListRef = useRef<FixedSizeList>();

  const filteredChainList: Blockchain[] = useMemo(() => {
    return blockchains.filter(getFilter(debouncedQuery));
  }, [blockchains, debouncedQuery]);

  const handleSelect = useCallback(
    (chain: Blockchain) => {
      activeModal === ModalView.Fromchain
        ? setFromChain(chain)
        : activeModal === ModalView.ToChain
        ? setToChain(chain)
        : null;
      dismissModal();
    },
    [activeModal, setFromChain, setToChain, dismissModal]
  );

  useEffect(() => {
    if (isBlockchainModalOpen) {
      setSearchQuery("");
    }
  }, [isBlockchainModalOpen]);

  const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    fixedSizedListRef.current?.scrollTo(0);
  }, []);

  return (
    <Modal isOpen={isBlockchainModalOpen} onDismiss={dismissModal}>
      <ModalContentWrapper>
        <AutoColumn gap="1rem" style={{ padding: "1.25rem" }}>
          <RowBetween>
            <Text weight={500} color="text300">
              {activeModal === ModalView.Fromchain
                ? "Select From Chain"
                : "Select To Chain"}
            </Text>
            <IconButton onClick={dismissModal}>
              <VscChromeClose />
            </IconButton>
          </RowBetween>
          <Row>
            <SearchInput
              type="text"
              id="chain-search-input"
              placeholder="Search name or chainId"
              autoComplete="off"
              value={searchQuery}
              ref={inputRef as RefObject<HTMLInputElement>}
              onChange={handleInput}
            />
          </Row>
        </AutoColumn>
        <Separator />
        {searchQuery.length > 0 && filteredChainList.length > 0 && (
          <div style={{ flex: "1", minHeight: "15rem" }}>
            <AutoSizer disableWidth>
              {({ height }) => (
                <ChainList
                  height={height}
                  blockchains={filteredChainList}
                  onChainSelect={handleSelect}
                  selectedFromChain={fromChain}
                  selectedToChain={toChain}
                  fixedListRef={fixedSizedListRef}
                  isLoading={false}
                />
              )}
            </AutoSizer>
          </div>
        )}

        {searchQuery.length > 0 && filteredChainList.length === 0 && (
          <Column style={{ padding: "1.25rem", height: "100%" }}>
            <Text
              color="text300"
              style={{ textAlign: "center", marginBottom: "1.25rem" }}
            >
              No results found
            </Text>
          </Column>
        )}

        {!searchQuery && (
          <div style={{ flex: "1", minHeight: "15rem" }}>
            <AutoSizer disableWidth>
              {({ height }) => (
                <ChainList
                  height={height > 0 ? height : 300}
                  blockchains={blockchains}
                  onChainSelect={handleSelect}
                  selectedFromChain={fromChain}
                  selectedToChain={toChain}
                  fixedListRef={fixedSizedListRef}
                  isLoading={false}
                />
              )}
            </AutoSizer>
          </div>
        )}
      </ModalContentWrapper>
    </Modal>
  );
}
