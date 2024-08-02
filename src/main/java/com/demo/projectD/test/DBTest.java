package com.demo.projectD.test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBTest {

    private static final String URL = "jdbc:mysql://localhost:3306/aichatbotproject";
    private static final String USER = "root";
    private static final String PASSWORD = "1234";
    private static final String DRIVER_CLASS = "com.mysql.cj.jdbc.Driver";

    public static void main(String[] args) {
        try {
            // Load MySQL JDBC Driver
            Class.forName(DRIVER_CLASS);

            // Establish connection to the database
            Connection connection = DriverManager.getConnection(URL, USER, PASSWORD);

            if (connection != null) {
                System.out.println("Database connected successfully!");
            } else {
                System.out.println("Failed to connect to the database.");
            }

            // Close the connection
            connection.close();

        } catch (ClassNotFoundException e) {
            System.err.println("JDBC Driver not found.");
            e.printStackTrace();
        } catch (SQLException e) {
            System.err.println("SQL Exception occurred.");
            e.printStackTrace();
        }
    }
}
