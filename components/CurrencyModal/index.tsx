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
import type { Currency } from "types";
import { useAllTokens } from "hooks/useAllTokens";
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
import { getTokenFilter } from "../../utils";
import { Modal } from "../Modal";
import { CommonBase } from "./CommonBases";
import { CurrencyList } from "./CurrencyList";

export default function CurrencyModal() {
  const [selectedCurrency, setCurrency, fromChain] = useStore(
    (state) => [state.currency, state.setCurrency, state.fromChain],
    shallow
  );

  const { isCurrencyModalOpen, dismissModal } = useModal();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedQuery = useDebounce(searchQuery, 200);
  const allTokens = useAllTokens();

  const inputRef = useRef<HTMLInputElement>();
  const fixedSizedListRef = useRef<FixedSizeList>();

  const filteredCurrency: Currency[] = useMemo(() => {
    return allTokens.filter(getTokenFilter(debouncedQuery));
  }, [allTokens, debouncedQuery]);

  const handleSelect = useCallback(
    (token: Currency) => {
      setCurrency(token);
      dismissModal();
    },
    [setCurrency, dismissModal]
  );

  useEffect(() => {
    if (isCurrencyModalOpen) {
      setSearchQuery("");
    }
  }, [isCurrencyModalOpen]);

  const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    fixedSizedListRef.current?.scrollTo(0);
  }, []);

  return (
    <Modal isOpen={isCurrencyModalOpen} onDismiss={dismissModal}>
      <ModalContentWrapper>
        <AutoColumn gap="1rem" style={{ padding: "1.25rem" }}>
          <RowBetween>
            <Text weight={500} color="text300">
              Select Token to Bridge
            </Text>
            <IconButton onClick={dismissModal}>
              <VscChromeClose />
            </IconButton>
          </RowBetween>
          <Row>
            <SearchInput
              type="text"
              id="token-search-input"
              placeholder="Search name or symbol"
              autoComplete="off"
              value={searchQuery}
              ref={inputRef as RefObject<HTMLInputElement>}
              onChange={handleInput}
            />
          </Row>
          <CommonBase
            chainId={parseInt(fromChain.chainId)}
            onSelect={handleSelect}
            selectedCurrency={selectedCurrency}
          />
        </AutoColumn>
        <Separator />
        {searchQuery.length > 0 && filteredCurrency.length > 0 && (
          <div style={{ flex: "1", minHeight: "15rem" }}>
            <AutoSizer disableWidth>
              {({ height }) => (
                <CurrencyList
                  height={height}
                  currencies={filteredCurrency}
                  onCurrencySelect={handleSelect}
                  selectedCurrency={selectedCurrency}
                  fixedListRef={fixedSizedListRef}
                  isLoading={false}
                />
              )}
            </AutoSizer>
          </div>
        )}

        {searchQuery.length > 0 && filteredCurrency.length === 0 && (
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
                <CurrencyList
                  height={height > 0 ? height : 300}
                  currencies={allTokens}
                  onCurrencySelect={handleSelect}
                  selectedCurrency={selectedCurrency}
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
