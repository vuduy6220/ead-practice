package com.example.demo.api;

import com.example.demo.entity.Stock;
import com.example.demo.service.StockService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/stocks")
@Slf4j
@RequiredArgsConstructor
public class StockAPI {
    private final StockService stockService;

    @GetMapping("/get-stock-price/{symbol}")
    public Optional<Double> getStockPrice(@Valid @PathVariable String symbol) {
        Optional<Stock> optionalStock = stockService.getStockBySymbol(symbol);
        if(optionalStock.isPresent()) {
            Stock stockFound = optionalStock.get();
            return stockFound.getPrice();
        }
        return null;
    }

    @GetMapping("/get-stock-name/{symbol}")
    public Optional<String> getStockName(@Valid String symbol) {
        Optional<Stock> optionalStock = stockService.getStockBySymbol(symbol);
        if(optionalStock.isPresent()) {
            Stock stockFound = optionalStock.get();
            return stockFound.getName();
        }
        return null;
    }
}
