import { useEffect, useState } from "react";
import { ProductService } from "../services/productManagement.service";

export function useSearchProducts(text) {
  const [searchResult, setResult] = useState([]);

  useEffect(() => {
    setResult(ProductService.getProducts(text));
  }, [text]);

  return [searchResult];
}
