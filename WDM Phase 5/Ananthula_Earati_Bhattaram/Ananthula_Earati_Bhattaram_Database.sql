-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2021 at 03:03 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sxb4167_wdm`
--

-- --------------------------------------------------------

--
-- Table structure for table `bill_details`
--

CREATE TABLE `bill_details` (
  `Bill_Id` int(11) NOT NULL,
  `Order_ID` int(11) DEFAULT NULL,
  `TotalCost` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bill_details`
--

INSERT INTO `bill_details` (`Bill_Id`, `Order_ID`, `TotalCost`) VALUES
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
(43, 26, 200),
(44, 29, 200),
(45, 30, 200),
(46, 31, 200),
(47, 32, 200),
(48, 33, 3200),
(49, 34, 3210),
(50, 35, 3210),
(51, 36, 3210),
(52, 31, 200),
(53, 32, 400),
(54, 30, 400),
(55, 31, 200),
(56, 32, 300),
(57, 33, 800),
(58, 34, 300),
(59, 35, 120),
(60, 35, 500),
(61, 36, 100),
(62, 37, 300),
(63, 38, 200),
(64, 39, 300),
(65, 40, 200),
(66, 41, 200),
(67, 42, 200),
(68, 43, 200);

-- --------------------------------------------------------

--
-- Table structure for table `equipment`
--

CREATE TABLE `equipment` (
  `Equipment_ID` int(11) NOT NULL,
  `EquipmentName` varchar(200) DEFAULT NULL,
  `EquipmentType` varchar(20) DEFAULT NULL,
  `Status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `equipment`
--

INSERT INTO `equipment` (`Equipment_ID`, `EquipmentName`, `EquipmentType`, `Status`) VALUES
(318, 'Equipment 305', 'Dryer', 'Inactive'),
(320, 'Equipment 320', 'Dryer', 'Active'),
(322, 'Equipment123', 'Dryer', 'Active'),
(324, 'Equipment 324', 'Basket', 'Active'),
(326, 'Equipment 330', 'Dryer', 'Active'),
(328, 'Equipment 304', 'Dryer', 'Active'),
(330, 'Equipment 304', 'Washer', 'Active'),
(331, 'Equipment 340', 'Iron', 'Active'),
(332, 'Equipment302', 'Washing', 'Active'),
(333, 'Equipment 350', 'Washer', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `login_master`
--

CREATE TABLE `login_master` (
  `username` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL,
  `role` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login_master`
--

INSERT INTO `login_master` (`username`, `password`, `role`) VALUES
('admin@instawash.com', 'admin12345', 'admin'),
('dummy@gmail.com', 'dummy12345', 'visitor'),
('kingvinay110@gmail.com', 'vinay1234', 'user'),
('kosarajusuhas@gmail.com', 'mbjr@2108', 'visitor'),
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
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
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
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_Id`, `Customer_Id`, `Type`, `Status`, `Quantity`, `AssignedTo`, `OrderDate`, `TypeOfDelivery`, `DeliveryDate`) VALUES
(20, 124, 'Dry Clean', 'Inprogress', 20, 515, '2021-11-22', 'Pickup', '2021-11-16'),
(21, 126, 'Washing', 'Inprogress', 20, 516, '2021-11-22', 'Delivery', '2021-11-24'),
(24, 123, 'Washing', 'Inprogress', 20, 517, '2021-11-22', NULL, NULL),
(27, 123, 'Washing', 'Inprogress', 20, NULL, '2021-11-28', 'Pickup', '2021-11-30'),
(28, 123, 'Washing', 'Inprogress', 20, NULL, '2021-11-28', NULL, NULL),
(29, 123, 'Washing', 'Inprogress', 20, NULL, '2021-11-28', NULL, NULL),
(30, 123, 'Washing', 'Inprogress', 40, NULL, '2021-11-28', NULL, NULL),
(31, 124, 'Drying', 'Inprogress', 20, NULL, '2021-11-28', NULL, NULL),
(32, 124, 'Drying', 'Inprogress', 30, NULL, '2021-11-28', NULL, NULL),
(33, 126, 'Washing', 'Inprogress', 80, NULL, '2021-11-28', 'Delivery', '2021-11-11'),
(34, 126, 'Drying', 'Inprogress', 30, NULL, '2021-11-28', 'Delivery', '2021-11-08'),
(35, 198, 'Washing,Drying', 'Inprogress', 50, 518, '2021-11-29', NULL, NULL),
(36, 120, 'Washing', 'Inprogress', 10, NULL, '2021-11-29', NULL, NULL),
(37, 120, 'Drying', 'Inprogress', 30, NULL, '2021-11-29', 'Pickup', '2021-11-30'),
(38, 126, 'Drying, Washing', 'Inprogress', 20, NULL, '2021-11-29', 'Delivery', '2021-11-30'),
(39, 130, 'Drying', 'Inprogress', 30, NULL, '2021-11-29', NULL, NULL),
(40, 126, 'Washing', 'Inprogress', 20, NULL, '2021-11-29', 'Delivery', '2021-11-30'),
(41, 123, 'washing', 'Inprogress', 20, NULL, '2021-11-29', NULL, NULL),
(42, 123, 'washing', 'Inprogress', 20, NULL, '2021-11-29', NULL, NULL),
(43, 126, 'Washing', 'Inprogress', 20, NULL, '2021-11-29', 'Delivery', '2021-11-30');

-- --------------------------------------------------------

--
-- Table structure for table `personnel`
--

CREATE TABLE `personnel` (
  `Personnel_Id` int(11) NOT NULL,
  `FName` varchar(50) DEFAULT NULL,
  `LName` varchar(50) DEFAULT NULL,
  `ContactNo` bigint(255) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `UserRole` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `personnel`
--

INSERT INTO `personnel` (`Personnel_Id`, `FName`, `LName`, `ContactNo`, `Email`, `UserRole`) VALUES
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
-- Table structure for table `visitor`
--

CREATE TABLE `visitor` (
  `Visitor_id` int(11) NOT NULL,
  `FirstName` varchar(225) NOT NULL,
  `LastName` varchar(225) NOT NULL,
  `Contact` bigint(255) NOT NULL,
  `Email` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `visitor`
--

INSERT INTO `visitor` (`Visitor_id`, `FirstName`, `LastName`, `Contact`, `Email`) VALUES
(126, 'Dummy', 'none', 1234567890, 'dummy@gmail.com'),
(127, 'sai', 'Santhosh', 8897806554, 'rohith@gmail.com'),
(128, 'Pavani', 'Earati', 6823062168, 'pavanieerati@gmail.com'),
(129, 'Suhas', 'Kosa', 8897806554, 'kosarajusuhas@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bill_details`
--
ALTER TABLE `bill_details`
  ADD PRIMARY KEY (`Bill_Id`);

--
-- Indexes for table `equipment`
--
ALTER TABLE `equipment`
  ADD PRIMARY KEY (`Equipment_ID`);

--
-- Indexes for table `login_master`
--
ALTER TABLE `login_master`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_Id`);

--
-- Indexes for table `personnel`
--
ALTER TABLE `personnel`
  ADD PRIMARY KEY (`Personnel_Id`);

--
-- Indexes for table `visitor`
--
ALTER TABLE `visitor`
  ADD PRIMARY KEY (`Visitor_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
