import { memo, useCallback, useContext, useEffect, useState } from "react";
import { SettingsContext, SettingsDispatchContext } from "./filterReducer";
import { Pagination } from "@mui/material";

function FilterPagination() {
  const settings = useContext(SettingsContext);
  const dispatch = useContext(SettingsDispatchContext);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPage(settings.pages.page);
  }, [settings.pages]);
  const handleChangePage = useCallback(
    (page) => {
      dispatch({
        type: "changePage",
        page: page,
      });
    },
    [page]
  );
  return (
    <Pagination
      count={settings.pages.count}
      page={page}
      className="pagination"
      onChange={(_, page) => handleChangePage(page)}
    />
  );
}

export default memo(FilterPagination);
