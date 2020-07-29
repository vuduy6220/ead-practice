package com.example.demo.entity;

import lombok.Data;
import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Optional;

@Entity
@Data
@Getter
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String symbol;
    private String name;
    private Double price;

    public Optional<String> getName() {
        return Optional.ofNullable(name);
    }

    public Optional<Double> getPrice() {
        return Optional.ofNullable(price);
    }
}
