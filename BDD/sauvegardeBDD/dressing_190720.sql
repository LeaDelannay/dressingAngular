-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  sam. 20 juil. 2019 à 10:09
-- Version du serveur :  10.1.37-MariaDB
-- Version de PHP :  7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `dressing`
--

-- --------------------------------------------------------

--
-- Structure de la table `caracteristique`
--

CREATE TABLE `caracteristique` (
  `ID_CARACT` int(11) NOT NULL,
  `LIBEL_CARACT` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `caracteristique`
--

INSERT INTO `caracteristique` (`ID_CARACT`, `LIBEL_CARACT`) VALUES
(1, 'Moulant'),
(2, 'Regular'),
(3, 'Large'),
(4, 'Léger'),
(5, 'Chaud'),
(6, 'Ample');

-- --------------------------------------------------------

--
-- Structure de la table `caract_assoc`
--

CREATE TABLE `caract_assoc` (
  `ID_CARACT` int(11) NOT NULL,
  `CAR_ID_CARACT` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `caract_assoc`
--

INSERT INTO `caract_assoc` (`ID_CARACT`, `CAR_ID_CARACT`) VALUES
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 4),
(2, 5),
(3, 4),
(3, 5);

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `ID_CAT` int(11) NOT NULL,
  `LIBEL_CAT` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`ID_CAT`, `LIBEL_CAT`) VALUES
(1, 'Jupe'),
(2, 'Echarpe'),
(3, 'Robe/Combi'),
(4, 'Chaussures'),
(5, 'Pull'),
(6, 'Tshirt'),
(7, 'Veste'),
(8, 'Pantalon'),
(9, 'Short'),
(10, 'Blouse'),
(11, 'Chemise'),
(12, 'Body'),
(13, 'Bustier'),
(14, 'Crop Top'),
(15, 'Débardeur'),
(16, 'Gilet'),
(17, 'Cardigan'),
(18, 'Sweat'),
(19, 'Tunique'),
(20, 'lunettes de soleil');

-- --------------------------------------------------------

--
-- Structure de la table `couleur`
--

CREATE TABLE `couleur` (
  `ID_COUL` int(11) NOT NULL,
  `LIBEL_COUL` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `couleur`
--

INSERT INTO `couleur` (`ID_COUL`, `LIBEL_COUL`) VALUES
(1, 'Rouge'),
(2, 'Orange'),
(3, 'Jaune'),
(4, 'Vert'),
(5, 'Bleu'),
(6, 'Indigo'),
(7, 'Violet'),
(8, 'Blanc'),
(9, 'Noir'),
(10, 'Gris'),
(11, 'Bleu roi'),
(12, 'Gris chiné'),
(13, 'Bleu chiné'),
(14, 'Doré');

-- --------------------------------------------------------

--
-- Structure de la table `coul_assoc`
--

CREATE TABLE `coul_assoc` (
  `ID_COUL` int(11) NOT NULL,
  `COU_ID_COUL` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `coul_assoc`
--

INSERT INTO `coul_assoc` (`ID_COUL`, `COU_ID_COUL`) VALUES
(8, 1),
(8, 2),
(8, 3),
(8, 4),
(8, 5),
(8, 6),
(8, 7),
(8, 8),
(8, 9),
(8, 10),
(9, 1),
(9, 2),
(9, 3),
(9, 4),
(9, 5),
(9, 6),
(9, 7),
(9, 8),
(9, 9),
(9, 10),
(10, 1),
(10, 2),
(10, 3),
(10, 4),
(10, 5),
(10, 6),
(10, 7),
(10, 8),
(10, 9),
(10, 10);

-- --------------------------------------------------------

--
-- Structure de la table `marque`
--

CREATE TABLE `marque` (
  `ID_MARQUE` int(11) NOT NULL,
  `NOM_MARQUE` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `marque`
--

INSERT INTO `marque` (`ID_MARQUE`, `NOM_MARQUE`) VALUES
(1, 'Roxy'),
(2, 'Wallis'),
(3, 'Freeman T Porter'),
(4, 'Esprit'),
(5, 'Tom Tailor'),
(6, 'Etam'),
(7, 'Vans'),
(8, 'Only'),
(9, 'Gap'),
(10, 'Vero Moda'),
(11, 'Anna Field'),
(12, 'Chevignon'),
(13, 'Carhartt'),
(14, 'Tommy Hilfinger'),
(15, 'Brice');

-- --------------------------------------------------------

--
-- Structure de la table `note`
--

CREATE TABLE `note` (
  `ID_NOTE` int(11) NOT NULL,
  `NUM_NOTE` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `note`
--

INSERT INTO `note` (`ID_NOTE`, `NUM_NOTE`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- --------------------------------------------------------

--
-- Structure de la table `occasion`
--

CREATE TABLE `occasion` (
  `ID_OCCAS` int(11) NOT NULL,
  `LIBEL_OCCAS` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `occasion`
--

INSERT INTO `occasion` (`ID_OCCAS`, `LIBEL_OCCAS`) VALUES
(1, 'Décontractée'),
(2, 'Soirée'),
(3, 'Dimanche'),
(4, 'Travail'),
(5, 'Sport'),
(6, 'Grandes Occasions'),
(7, 'Soirée maison'),
(8, 'activité de loisir');

-- --------------------------------------------------------

--
-- Structure de la table `tenue`
--

CREATE TABLE `tenue` (
  `ID_TENUE` int(11) NOT NULL,
  `LIBEL_TENUE` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `tenue`
--

INSERT INTO `tenue` (`ID_TENUE`, `LIBEL_TENUE`) VALUES
(1, 'Tenue entretiens');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `ID_USER` int(11) NOT NULL,
  `PSEUDO_USER` varchar(50) DEFAULT NULL,
  `LOGIN_USER` varchar(255) DEFAULT NULL,
  `MDP_USER` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`ID_USER`, `PSEUDO_USER`, `LOGIN_USER`, `MDP_USER`) VALUES
(1, 'Pumba', 'pumba@ici.fr', 'pumba123'),
(2, 'roro', 'roro@ici.fr', 'aa023ae382c3530ad7b576331f92110e1cad484e829e3d2efb115739d24841a5'),
(3, 'ju', 'ju@ici.fr', '75c42329b9854ca1e51f5eb87fbbc2bd3a26a017b62ebd7fc5ea22b9d19bffd3'),
(4, 'clem', 'clem@ici.fr', '45cd15b6253e64801bf82e3dcf955c042c9bc3f7ef467ef98ed75de4a560d5ee'),
(5, 'jadou', 'jadou@ici.fr', 'f18b864476a807406ddae8a0df9fa4146bbe1b737ea0a01e894998a70cca8d09'),
(6, 'loulou', 'loulou@ici.fr', '4891aec07ece65a45140f4bdd0975727712c8e53fa3c039f9973d7ef8b3073fd'),
(7, 'alex', 'alex@ici.fr', 'd9508122cd143d69df229bf3624b7bcb2b8ac81ed210a0c926455ef119c12abd'),
(8, 'l\'a', 'lea@ici.fr', 'b808523f67d3104bee4e2e44f7ba28df43cccde54693c635c26749e9f4854b9c'),
(9, 'plaisance', 'plaisance@ici.fr', '718cd1d17502ae13610c9a3efbbc69260f33d8a1fc63174087055e1450507914'),
(10, 'lou\'lou', 'lou\'lou@ici.fr', '4891aec07ece65a45140f4bdd0975727712c8e53fa3c039f9973d7ef8b3073fd'),
(11, 'loul', 'loul@ici.fr', '9d1ae2d1fc07b204647d4d5e61aeedefe1067a5954876ecb4c28e635f3a5ac7f');

-- --------------------------------------------------------

--
-- Structure de la table `vetement`
--

CREATE TABLE `vetement` (
  `ID_VET` int(11) NOT NULL,
  `FK_ID_CAT` int(11) NOT NULL,
  `FK_ID_MARQUE` int(11) NOT NULL,
  `FK_ID_NOTE` int(11) NOT NULL,
  `FK_ID_USER` int(11) NOT NULL,
  `NOM_VET` varchar(50) DEFAULT NULL,
  `IMG_VET` varchar(1000) DEFAULT NULL,
  `DESCRIPT_VET` varchar(1500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `vetement`
--

INSERT INTO `vetement` (`ID_VET`, `FK_ID_CAT`, `FK_ID_MARQUE`, `FK_ID_NOTE`, `FK_ID_USER`, `NOM_VET`, `IMG_VET`, `DESCRIPT_VET`) VALUES
(1, 5, 3, 4, 1, 'Blouse blanche et doré manches longues classe', 'http://localhost:3000/api/upload/DSC_0141.JPG', 'Blouse blanche à manches longues/ 3quart avec boutons dorés'),
(2, 8, 3, 4, 1, 'Pantalon noir slim', NULL, 'Pantalon noir slim légèrement délavé jolies poches arrières'),
(25, 6, 4, 3, 1, 'Testwsvws', NULL, 'testPostman6'),
(26, 6, 4, 3, 1, 'test7', NULL, 'testPostman7'),
(27, 6, 4, 3, 1, 'test8', NULL, 'testPostman8'),
(35, 8, 11, 5, 1, 'Sarouel bleu et vert ', NULL, 'Sarouel bleu et vert avec des plumes de paon joli'),
(43, 10, 11, 2, 1, 'Tshirt test image taille 1', 'http://localhost:3000/api/upload/DSC_0141.JPG', 'Tshirt test 1'),
(44, 2, 8, 2, 1, 'Jdd1', 'http://localhost:3000/api/upload/DSC_0094.JPG', 'Jdd1'),
(45, 17, 12, 2, 1, 'Jdd2', 'http://localhost:3000/api/upload/DSC_0239.JPG', 'Jdd2'),
(46, 4, 7, 4, 1, 'Jdd3', 'http://localhost:3000/api/upload/DSC_0251.JPG', 'Jdd3'),
(47, 5, 13, 5, 1, 'Pull gris de Hugros', 'http://localhost:3000/api/upload/P1040550.JPG', 'Pull gris chiné de Hugros'),
(48, 7, 14, 4, 1, 'Veste de chasse de Théto', 'http://localhost:3000/api/upload/P1040535.JPG', 'Tu le feras toi même'),
(49, 6, 15, 2, 1, 'Tshirt tout neuf du 22 juin de Théto', 'http://localhost:3000/api/upload/P1010725.JPG', 'Tshirt tout neuf, sans étiquette(lui) et mignon !'),
(50, 20, 7, 4, 1, 'lunettes de soleil de théo', NULL, 'lunettes pour garçons prétentieux'),
(51, 2, 3, 3, 1, 'VetTest', NULL, 'VetTest'),
(52, 18, 1, 4, 1, 'Sweat bleu gris à capuche', 'http://localhost:3000/api/upload/pull_roxy.png', 'Pull bleu gris à capuche');

-- --------------------------------------------------------

--
-- Structure de la table `vet_caract_assoc`
--

CREATE TABLE `vet_caract_assoc` (
  `ID_VET` int(11) NOT NULL,
  `ID_CARACT` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `vet_caract_assoc`
--

INSERT INTO `vet_caract_assoc` (`ID_VET`, `ID_CARACT`) VALUES
(1, 4),
(1, 5),
(1, 6),
(2, 1),
(2, 4),
(25, 1),
(26, 1),
(27, 1),
(35, 3),
(35, 4),
(43, 2),
(43, 5),
(44, 5),
(44, 6),
(45, 3),
(45, 5),
(46, 2),
(46, 5),
(47, 2),
(47, 4),
(48, 5),
(48, 6),
(49, 1),
(49, 4),
(50, 4),
(51, 1),
(51, 2),
(52, 4),
(52, 6);

-- --------------------------------------------------------

--
-- Structure de la table `vet_coul_assoc`
--

CREATE TABLE `vet_coul_assoc` (
  `ID_VET` int(11) NOT NULL,
  `ID_COUL` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `vet_coul_assoc`
--

INSERT INTO `vet_coul_assoc` (`ID_VET`, `ID_COUL`) VALUES
(1, 5),
(1, 6),
(1, 7),
(2, 9),
(25, 1),
(26, 1),
(27, 8),
(35, 4),
(35, 5),
(43, 6),
(43, 8),
(44, 5),
(44, 8),
(44, 9),
(45, 1),
(45, 3),
(45, 4),
(46, 1),
(46, 8),
(46, 9),
(47, 12),
(48, 4),
(49, 1),
(49, 3),
(49, 9),
(50, 9),
(51, 4),
(51, 6),
(52, 5),
(52, 8),
(52, 10);

-- --------------------------------------------------------

--
-- Structure de la table `vet_occas_assoc`
--

CREATE TABLE `vet_occas_assoc` (
  `ID_VET` int(11) NOT NULL,
  `ID_OCCAS` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `vet_occas_assoc`
--

INSERT INTO `vet_occas_assoc` (`ID_VET`, `ID_OCCAS`) VALUES
(1, 1),
(1, 4),
(2, 2),
(2, 4),
(2, 6),
(25, 1),
(26, 1),
(27, 1),
(35, 1),
(35, 3),
(43, 1),
(43, 3),
(44, 2),
(44, 4),
(44, 5),
(44, 6),
(45, 1),
(45, 3),
(45, 5),
(46, 1),
(46, 2),
(46, 3),
(46, 4),
(46, 7),
(47, 1),
(47, 2),
(47, 3),
(47, 4),
(47, 6),
(47, 7),
(48, 8),
(49, 1),
(49, 2),
(49, 3),
(49, 7),
(49, 8),
(50, 2),
(50, 3),
(50, 8),
(51, 6),
(51, 8),
(52, 1),
(52, 3),
(52, 7),
(52, 8);

-- --------------------------------------------------------

--
-- Structure de la table `vet_ten_assoc`
--

CREATE TABLE `vet_ten_assoc` (
  `ID_TENUE` int(11) NOT NULL,
  `ID_VET` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `vet_ten_assoc`
--

INSERT INTO `vet_ten_assoc` (`ID_TENUE`, `ID_VET`) VALUES
(1, 1),
(1, 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `caracteristique`
--
ALTER TABLE `caracteristique`
  ADD PRIMARY KEY (`ID_CARACT`);

--
-- Index pour la table `caract_assoc`
--
ALTER TABLE `caract_assoc`
  ADD PRIMARY KEY (`ID_CARACT`,`CAR_ID_CARACT`),
  ADD KEY `FK_CARACT_ASSOC` (`CAR_ID_CARACT`);

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`ID_CAT`);

--
-- Index pour la table `couleur`
--
ALTER TABLE `couleur`
  ADD PRIMARY KEY (`ID_COUL`);

--
-- Index pour la table `coul_assoc`
--
ALTER TABLE `coul_assoc`
  ADD PRIMARY KEY (`ID_COUL`,`COU_ID_COUL`),
  ADD KEY `FK_COUL_ASSOC` (`COU_ID_COUL`);

--
-- Index pour la table `marque`
--
ALTER TABLE `marque`
  ADD PRIMARY KEY (`ID_MARQUE`);

--
-- Index pour la table `note`
--
ALTER TABLE `note`
  ADD PRIMARY KEY (`ID_NOTE`);

--
-- Index pour la table `occasion`
--
ALTER TABLE `occasion`
  ADD PRIMARY KEY (`ID_OCCAS`);

--
-- Index pour la table `tenue`
--
ALTER TABLE `tenue`
  ADD PRIMARY KEY (`ID_TENUE`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID_USER`);

--
-- Index pour la table `vetement`
--
ALTER TABLE `vetement`
  ADD PRIMARY KEY (`ID_VET`),
  ADD KEY `FK_CONCERNE` (`FK_ID_CAT`),
  ADD KEY `FK_DETIENT` (`FK_ID_USER`),
  ADD KEY `FK_FAIT` (`FK_ID_MARQUE`),
  ADD KEY `FK_POSSEDE` (`FK_ID_NOTE`);

--
-- Index pour la table `vet_caract_assoc`
--
ALTER TABLE `vet_caract_assoc`
  ADD PRIMARY KEY (`ID_VET`,`ID_CARACT`),
  ADD KEY `FK_VET_CARACT_ASSOC` (`ID_CARACT`);

--
-- Index pour la table `vet_coul_assoc`
--
ALTER TABLE `vet_coul_assoc`
  ADD PRIMARY KEY (`ID_VET`,`ID_COUL`),
  ADD KEY `FK_VET_COUL_ASSOC` (`ID_COUL`);

--
-- Index pour la table `vet_occas_assoc`
--
ALTER TABLE `vet_occas_assoc`
  ADD PRIMARY KEY (`ID_VET`,`ID_OCCAS`),
  ADD KEY `FK_VET_OCCAS_ASSOC` (`ID_OCCAS`);

--
-- Index pour la table `vet_ten_assoc`
--
ALTER TABLE `vet_ten_assoc`
  ADD PRIMARY KEY (`ID_TENUE`,`ID_VET`),
  ADD KEY `FK_VAT_TEN_ASSOC` (`ID_VET`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `caracteristique`
--
ALTER TABLE `caracteristique`
  MODIFY `ID_CARACT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `ID_CAT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `couleur`
--
ALTER TABLE `couleur`
  MODIFY `ID_COUL` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `marque`
--
ALTER TABLE `marque`
  MODIFY `ID_MARQUE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `note`
--
ALTER TABLE `note`
  MODIFY `ID_NOTE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `occasion`
--
ALTER TABLE `occasion`
  MODIFY `ID_OCCAS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `tenue`
--
ALTER TABLE `tenue`
  MODIFY `ID_TENUE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `ID_USER` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `vetement`
--
ALTER TABLE `vetement`
  MODIFY `ID_VET` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `caract_assoc`
--
ALTER TABLE `caract_assoc`
  ADD CONSTRAINT `FK_CARACT_ASSOC` FOREIGN KEY (`CAR_ID_CARACT`) REFERENCES `caracteristique` (`ID_CARACT`),
  ADD CONSTRAINT `FK_CARACT_ASSOC2` FOREIGN KEY (`ID_CARACT`) REFERENCES `caracteristique` (`ID_CARACT`);

--
-- Contraintes pour la table `coul_assoc`
--
ALTER TABLE `coul_assoc`
  ADD CONSTRAINT `FK_COUL_ASSOC` FOREIGN KEY (`COU_ID_COUL`) REFERENCES `couleur` (`ID_COUL`),
  ADD CONSTRAINT `FK_COUL_ASSOC2` FOREIGN KEY (`ID_COUL`) REFERENCES `couleur` (`ID_COUL`);

--
-- Contraintes pour la table `vetement`
--
ALTER TABLE `vetement`
  ADD CONSTRAINT `FK_CONCERNE` FOREIGN KEY (`FK_ID_CAT`) REFERENCES `categorie` (`ID_CAT`),
  ADD CONSTRAINT `FK_DETIENT` FOREIGN KEY (`FK_ID_USER`) REFERENCES `user` (`ID_USER`),
  ADD CONSTRAINT `FK_FAIT` FOREIGN KEY (`FK_ID_MARQUE`) REFERENCES `marque` (`ID_MARQUE`),
  ADD CONSTRAINT `FK_POSSEDE` FOREIGN KEY (`FK_ID_NOTE`) REFERENCES `note` (`ID_NOTE`);

--
-- Contraintes pour la table `vet_caract_assoc`
--
ALTER TABLE `vet_caract_assoc`
  ADD CONSTRAINT `FK_VET_CARACT_ASSOC` FOREIGN KEY (`ID_CARACT`) REFERENCES `caracteristique` (`ID_CARACT`),
  ADD CONSTRAINT `FK_VET_CARACT_ASSOC2` FOREIGN KEY (`ID_VET`) REFERENCES `vetement` (`ID_VET`);

--
-- Contraintes pour la table `vet_coul_assoc`
--
ALTER TABLE `vet_coul_assoc`
  ADD CONSTRAINT `FK_VET_COUL_ASSOC` FOREIGN KEY (`ID_COUL`) REFERENCES `couleur` (`ID_COUL`),
  ADD CONSTRAINT `FK_VET_COUL_ASSOC2` FOREIGN KEY (`ID_VET`) REFERENCES `vetement` (`ID_VET`);

--
-- Contraintes pour la table `vet_occas_assoc`
--
ALTER TABLE `vet_occas_assoc`
  ADD CONSTRAINT `FK_VET_OCCAS_ASSOC` FOREIGN KEY (`ID_OCCAS`) REFERENCES `occasion` (`ID_OCCAS`),
  ADD CONSTRAINT `FK_VET_OCCAS_ASSOC2` FOREIGN KEY (`ID_VET`) REFERENCES `vetement` (`ID_VET`);

--
-- Contraintes pour la table `vet_ten_assoc`
--
ALTER TABLE `vet_ten_assoc`
  ADD CONSTRAINT `FK_VAT_TEN_ASSOC` FOREIGN KEY (`ID_VET`) REFERENCES `vetement` (`ID_VET`),
  ADD CONSTRAINT `FK_VAT_TEN_ASSOC2` FOREIGN KEY (`ID_TENUE`) REFERENCES `tenue` (`ID_TENUE`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
