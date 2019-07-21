-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  lun. 24 juin 2019 à 11:47
-- Version du serveur :  10.3.16-MariaDB
-- Version de PHP :  7.1.30

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `caracteristique`
--

INSERT INTO `caracteristique` (`ID_CARACT`, `LIBEL_CARACT`) VALUES
(1, 'Moulant'),
(2, 'Regular'),
(3, 'Large'),
(4, 'Léger'),
(5, 'Chaud');

-- --------------------------------------------------------

--
-- Structure de la table `caract_assoc`
--

CREATE TABLE `caract_assoc` (
  `ID_CARACT` int(11) NOT NULL,
  `CAR_ID_CARACT` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `ID_CAT` int(11) NOT NULL,
  `LIBEL_CAT` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`ID_CAT`, `LIBEL_CAT`) VALUES
(1, 'Hauts'),
(2, 'Bas'),
(3, 'Echarpes'),
(4, 'Robes'),
(5, 'Chaussures');

-- --------------------------------------------------------

--
-- Structure de la table `couleur`
--

CREATE TABLE `couleur` (
  `ID_COUL` int(11) NOT NULL,
  `LIBEL_COUL` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `couleur`
--

INSERT INTO `couleur` (`ID_COUL`, `LIBEL_COUL`) VALUES
(1, 'Violet'),
(2, 'Indigo'),
(3, 'Bleu'),
(4, 'Vert'),
(5, 'Jaune'),
(6, 'Orange'),
(7, 'Rouge'),
(8, 'Kaki');

-- --------------------------------------------------------

--
-- Structure de la table `coul_assoc`
--

CREATE TABLE `coul_assoc` (
  `ID_COUL` int(11) NOT NULL,
  `COU_ID_COUL` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `marque`
--

CREATE TABLE `marque` (
  `ID_MARQUE` int(11) NOT NULL,
  `NOM_MARQUE` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `marque`
--

INSERT INTO `marque` (`ID_MARQUE`, `NOM_MARQUE`) VALUES
(1, 'Freeman T Porter'),
(2, 'Roxy'),
(3, 'Vans'),
(4, 'Esprit'),
(5, 'Vero Moda'),
(6, 'Quicksilver'),
(7, 'Volcom'),
(8, 'Zara'),
(9, 'Jules'),
(10, 'Celio');

-- --------------------------------------------------------

--
-- Structure de la table `note`
--

CREATE TABLE `note` (
  `ID_NOTE` int(11) NOT NULL,
  `NUM_NOTE` Int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `occasion`
--

INSERT INTO `occasion` (`ID_OCCAS`, `LIBEL_OCCAS`) VALUES
(1, 'Décontractée'),
(2, 'Soirée'),
(3, 'Dimanche'),
(4, 'Travail'),
(5, 'Sport'),
(6, 'Grandes Occasions');

-- --------------------------------------------------------

--
-- Structure de la table `tenue`
--

CREATE TABLE `tenue` (
  `ID_TENUE` int(11) NOT NULL,
  `LIBEL_TENUE` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `ID_USER` int(11) NOT NULL,
  `PSEUDO_USER` varchar(50) DEFAULT NULL,
  `LOGIN_USER` varchar(255) DEFAULT NULL,
  `MDP_USER` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`ID_USER`, `PSEUDO_USER`, `LOGIN_USER`, `MDP_USER`) VALUES
(1, 'Pumba', 'pumba@ici.fr', 'pumba123');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `vetement`
--

INSERT INTO `vetement` (`ID_VET`, `FK_ID_CAT`, `FK_ID_MARQUE`, `FK_ID_NOTE`, `FK_ID_USER`, `NOM_VET`, `IMG_VET`, `DESCRIPT_VET`) VALUES
(1, 3, 9, 2, 1, 'Vetement 1', NULL, 'Vetement 1'),
(2, 4, 1, 3, 1, 'Vetement 2', NULL, 'Vetement 2'),
(3, 1, 2, 2, 1, 'Vetement 3', NULL, 'Vetement 3'),
(4, 2, 10, 5, 1, 'Vetement 4', NULL, 'Vetement 4'),
(5, 3, 1, 3, 1, 'Vetement 5', NULL, 'Vetement 5');

-- --------------------------------------------------------

--
-- Structure de la table `vet_caract_assoc`
--

CREATE TABLE `vet_caract_assoc` (
  `ID_VET` int(11) NOT NULL,
  `ID_CARACT` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `vet_caract_assoc`
--

INSERT INTO `vet_caract_assoc` (`ID_VET`, `ID_CARACT`) VALUES
(1, 3),
(1, 5),
(2, 3),
(2, 4),
(3, 3),
(3, 4),
(4, 3),
(4, 4),
(5, 1),
(5, 3);

-- --------------------------------------------------------

--
-- Structure de la table `vet_coul_assoc`
--

CREATE TABLE `vet_coul_assoc` (
  `ID_VET` int(11) NOT NULL,
  `ID_COUL` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `vet_coul_assoc`
--

INSERT INTO `vet_coul_assoc` (`ID_VET`, `ID_COUL`) VALUES
(1, 3),
(1, 7),
(2, 6),
(2, 8),
(3, 2),
(3, 7),
(4, 1),
(4, 3),
(4, 4),
(4, 6),
(5, 3),
(5, 5),
(5, 7);

-- --------------------------------------------------------

--
-- Structure de la table `vet_occas_assoc`
--

CREATE TABLE `vet_occas_assoc` (
  `ID_VET` int(11) NOT NULL,
  `ID_OCCAS` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `vet_occas_assoc`
--

INSERT INTO `vet_occas_assoc` (`ID_VET`, `ID_OCCAS`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 2),
(2, 3),
(3, 3),
(3, 5),
(4, 2),
(4, 3),
(4, 5),
(5, 4),
(5, 6);

-- --------------------------------------------------------

--
-- Structure de la table `vet_ten_assoc`
--

CREATE TABLE `vet_ten_assoc` (
  `ID_TENUE` int(11) NOT NULL,
  `ID_VET` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  ADD KEY `FK_VET_TEN_ASSOC` (`ID_VET`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `caracteristique`
--
ALTER TABLE `caracteristique`
  MODIFY `ID_CARACT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `ID_CAT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `couleur`
--
ALTER TABLE `couleur`
  MODIFY `ID_COUL` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `marque`
--
ALTER TABLE `marque`
  MODIFY `ID_MARQUE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `note`
--
ALTER TABLE `note`
  MODIFY `ID_NOTE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `occasion`
--
ALTER TABLE `occasion`
  MODIFY `ID_OCCAS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `tenue`
--
ALTER TABLE `tenue`
  MODIFY `ID_TENUE` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `ID_USER` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `vetement`
--
ALTER TABLE `vetement`
  MODIFY `ID_VET` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
  ADD CONSTRAINT `FK_VET_TEN_ASSOC` FOREIGN KEY (`ID_VET`) REFERENCES `vetement` (`ID_VET`),
  ADD CONSTRAINT `FK_VET_TEN_ASSOC2` FOREIGN KEY (`ID_TENUE`) REFERENCES `tenue` (`ID_TENUE`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
