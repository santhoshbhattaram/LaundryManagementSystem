-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 22, 2021 at 05:29 AM
-- Server version: 5.7.36
-- PHP Version: 7.3.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vxa3922_WDM`
--

-- --------------------------------------------------------

--
-- Table structure for table `Bill_Details`
--

CREATE TABLE `Bill_Details` (
  `Bill_Id` int(11) NOT NULL,
  `Order_ID` int(11) DEFAULT NULL,
  `TotalCost` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Bill_Details`
--

INSERT INTO `Bill_Details` (`Bill_Id`, `Order_ID`, `TotalCost`) VALUES
(8, 7, 250),
(9, 10, 140),
(10, 10, 150),
(11, 10, 1230),
(12, 11, 0),
(13, 11, 120),
(14, 12, 0),
(15, 12, 120),
(16, 13, 0),
(17, 13, 200),
(18, 14, 0),
(19, 14, 200),
(20, 15, 0),
(21, 15, 200),
(22, 16, 0),
(23, 16, 120),
(24, 17, 0),
(25, 17, 200),
(26, 18, 0),
(27, 18, 100),
(28, 19, 0),
(29, 19, 200),
(30, 20, 0),
(31, 20, 200),
(32, 21, 0),
(33, 21, 200),
(34, 22, 0),
(35, 22, 0),
(36, 22, 210),
(37, 23, 210),
(38, 24, 1000),
(39, 24, 0),
(40, 24, 200),
(41, 25, 0),
(42, 25, 200),
(43, 26, 200);

-- --------------------------------------------------------

--
-- Table structure for table `Equipment`
--

CREATE TABLE `Equipment` (
  `Equipment_ID` int(11) NOT NULL,
  `EquipmentName` varchar(200) DEFAULT NULL,
  `EquipmentType` varchar(20) DEFAULT NULL,
  `Status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Equipment`
--

INSERT INTO `Equipment` (`Equipment_ID`, `EquipmentName`, `EquipmentType`, `Status`) VALUES
(301, 'Equipment301', 'Dryer', 'Active'),
(304, 'Equipment1', 'Washer', 'Active'),
(306, 'Equipment1', 'Washer', 'Active'),
(308, 'Equipment1', 'Washer', 'Active'),
(310, 'Equipment1', 'Washer', 'Active'),
(312, 'Equipment 304', 'Dryer', 'Active'),
(314, 'Equipment306', 'Dryer', 'Active'),
(316, 'Equipment404', 'Washer', 'Active'),
(318, 'Equipment 305', 'Dryer', 'Active'),
(320, 'Equipment 20', 'Dryer', 'Active'),
(322, 'Equipment123', 'Dryer', 'Active'),
(324, 'Equipment 21', 'Basket', 'Active'),
(326, 'Equipment 330', 'Dryer', 'Active'),
(328, 'Equipment 304', 'Dryer', 'Active'),
(330, 'Equipment 304', 'Washer', 'Active'),
(331, 'Equipment 340', 'Iron', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `Incidents`
--

CREATE TABLE `Incidents` (
  `IncidentId` int(11) NOT NULL,
  `OrderId` int(11) DEFAULT NULL,
  `CustomerId` int(11) DEFAULT NULL,
  `Complaint` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Login_Master`
--

CREATE TABLE `Login_Master` (
  `username` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL,
  `role` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Login_Master`
--

INSERT INTO `Login_Master` (`username`, `password`, `role`) VALUES
('admin@instawash.com', 'admin12345', 'admin'),
('dummy@gmail.com', 'dummy12345', 'visitor'),
('kingvinay110@gmail.com', 'vinay1234', 'user'),
('pavanieerati@gmail.com', 'panda15102', 'visitor'),
('rohit@gmail.com', 'mbjr@2108', 'admin'),
('rohith12345@gmail.com', 'mbjr@2108', 'admin'),
('rohith@gmail.com', 'mbjr@2108', 'visitor'),
('rohithram150@gmail.com', 'mbjr@2108', 'manager'),
('rohithreddypetta@gmail.com', 'mbjr@2108', 'user'),
('sairam.patapati1997@gmail.com', 'mbjr@2108', 'user'),
('santhoshbhattaram@gmail.com', 'mbjr@2108', 'user'),
('sathoshbhattaram@gmail.com', 'mbjr@2108', 'user'),
('user@gmail.com', 'user12345', 'user'),
('vineeth@instawash.com', 'vinnu1234', 'manager');

-- --------------------------------------------------------

--
-- Table structure for table `Orders`
--

CREATE TABLE `Orders` (
  `order_Id` int(11) NOT NULL,
  `Customer_Id` int(11) DEFAULT NULL,
  `Type` varchar(225) DEFAULT NULL,
  `Status` varchar(225) DEFAULT NULL,
  `Quantity` float DEFAULT NULL,
  `AssignedTo` int(11) DEFAULT NULL,
  `OrderDate` date DEFAULT NULL,
  `TypeOfDelivery` varchar(225) DEFAULT NULL,
  `DeliveryDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Orders`
--

INSERT INTO `Orders` (`order_Id`, `Customer_Id`, `Type`, `Status`, `Quantity`, `AssignedTo`, `OrderDate`, `TypeOfDelivery`, `DeliveryDate`) VALUES
(8, 123, 'Drying', 'Inprogress', 12, 503, '2018-11-21', 'Pickup', '2021-11-19'),
(9, 123, 'Drying', 'Inprogress', 12, 504, '2018-11-21', 'Delivery', '2021-11-24'),
(10, 123, 'Drying', 'Inprogress', 123, 505, '2021-11-21', 'Pickup', '2021-11-25'),
(11, 123, 'Washing', 'Inprogress', 12, 506, '2018-11-21', NULL, NULL),
(12, 123, 'Washing', 'Inprogress', 12, 507, '2021-11-21', NULL, NULL),
(13, 123, 'Drying', 'Inprogress', 20, 508, '2021-11-21', NULL, NULL),
(14, 123, 'Washing', 'Inprogress', 20, 509, '2021-11-21', NULL, NULL),
(15, 122, 'Dry Clean', 'Inprogress', 20, 510, '2021-11-21', NULL, NULL),
(16, 123, 'Drying', 'Inprogress', 12, 511, '2021-11-21', NULL, NULL),
(17, 123, 'Washing', 'Inprogress', 20, 512, '2021-11-21', 'Pickup', '2021-11-16'),
(18, 123, 'Dryer', 'Inprogress', 10, 513, '2021-11-21', 'Pickup', '2021-11-22'),
(19, 123, 'Dry Cleaning', 'Inprogress', 20, 514, '2021-11-22', 'Pickup', '2021-11-15'),
(20, 124, 'Dry Clean', 'Inprogress', 20, 515, '2021-11-22', 'Pickup', '2021-11-16'),
(21, 126, 'Washing', 'Inprogress', 20, 516, '2021-11-22', 'Delivery', '2021-11-24'),
(23, 126, 'Drying', 'Inprogress', 21, 517, '2021-11-22', NULL, NULL),
(24, 123, 'Washing', 'Inprogress', 20, NULL, '2021-11-22', NULL, NULL),
(25, 123, 'Drying', 'Inprogress', 20, NULL, '2021-11-22', NULL, NULL),
(26, 123, 'Washing', 'Inprogress', 20, NULL, '2021-11-22', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Personnel`
--

CREATE TABLE `Personnel` (
  `Personnel_Id` int(11) NOT NULL,
  `FName` varchar(50) DEFAULT NULL,
  `LName` varchar(50) DEFAULT NULL,
  `ContactNo` bigint(255) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `UserRole` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Personnel`
--

INSERT INTO `Personnel` (`Personnel_Id`, `FName`, `LName`, `ContactNo`, `Email`, `UserRole`) VALUES
(501, 'Pavani', 'Eerati', 9874561230, 'pavani@instwash.com', 'User'),
(502, 'Santhosh', 'Bhattaram', 6541239870, 'santhosh@instawash.com', 'User'),
(503, 'Sai Santhosh', 'Bhattaram', 8978065548, 'santhoshbhattaram@gmail.com', 'user'),
(504, 'Sai ', 'Santhosh', 9780655488, 'sathoshbhattaram@gmail.com', 'user'),
(505, 'Admin', 'Instwash', 8897806554, 'admin@instawash.com', 'admin'),
(506, 'Sai Santhosh', 'Bhattaram', 8897806554, 'santhoshbhattaram@gmail.com', 'admin'),
(507, 'Vineeth', 'Kumar', 9494167887, 'vineeth@instawash.com', 'manager'),
(508, 'King', 'Vinay', 1234567890, 'kingvinay110@gmail.com', 'user'),
(509, 'Rohith', 'R', 8897806554, 'rohithram150@gmail.com', 'manager'),
(510, 'Petta', 'Rohuth', 8897806554, 'rohithreddypetta@gmail.com', 'user'),
(511, 'Rohith', 'B', 8897806554, 'rohit@gmail.com', 'admin'),
(512, 'Rohith', 'R', 8897806554, 'rohith12345@gmail.com', 'admin'),
(513, 'sai rami rdddy', 'patapati', 9963634559, 'sairam.patapati1997@gmail.com', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `TaskId` int(11) NOT NULL,
  `Personnel_Id` int(11) DEFAULT NULL,
  `Order_Id` int(11) DEFAULT NULL,
  `Status` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`TaskId`, `Personnel_Id`, `Order_Id`, `Status`) VALUES
(701, 501, 1, 'In progress'),
(702, 502, 2, 'Delivery');

-- --------------------------------------------------------

--
-- Table structure for table `Visitor`
--

CREATE TABLE `Visitor` (
  `Visitor_id` int(11) NOT NULL,
  `FirstName` varchar(225) NOT NULL,
  `LastName` varchar(225) NOT NULL,
  `Contact` bigint(255) NOT NULL,
  `Email` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Visitor`
--

INSERT INTO `Visitor` (`Visitor_id`, `FirstName`, `LastName`, `Contact`, `Email`) VALUES
(124, 'Sai Santhosh', 'Bhattaram', 8897806554, 'bhattaramsanthosh@gmail.com'),
(126, 'Dummy', 'none', 1234567890, 'dummy@gmail.com'),
(127, 'sai', 'Santhosh', 8897806554, 'rohith@gmail.com'),
(128, 'Pavani', 'Earati', 6823062168, 'pavanieerati@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Bill_Details`
--
ALTER TABLE `Bill_Details`
  ADD PRIMARY KEY (`Bill_Id`);

--
-- Indexes for table `Equipment`
--
ALTER TABLE `Equipment`
  ADD PRIMARY KEY (`Equipment_ID`);

--
-- Indexes for table `Incidents`
--
ALTER TABLE `Incidents`
  ADD PRIMARY KEY (`IncidentId`);

--
-- Indexes for table `Login_Master`
--
ALTER TABLE `Login_Master`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`order_Id`);

--
-- Indexes for table `Personnel`
--
ALTER TABLE `Personnel`
  ADD PRIMARY KEY (`Personnel_Id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`TaskId`);

--
-- Indexes for table `Visitor`
--
ALTER TABLE `Visitor`
  ADD PRIMARY KEY (`Visitor_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
