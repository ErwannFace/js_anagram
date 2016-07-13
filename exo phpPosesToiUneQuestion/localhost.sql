-- phpMyAdmin SQL Dump
-- version 4.2.12deb2+deb8u1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Lun 11 Juillet 2016 à 17:10
-- Version du serveur :  5.5.44-0+deb8u1
-- Version de PHP :  5.6.20-0+deb8u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `PTUQ`
--

-- --------------------------------------------------------

--
-- Structure de la table `t_answers`
--

CREATE TABLE IF NOT EXISTS `t_answers` (
  `id` int(11) NOT NULL,
  `link` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `questionId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `t_categories`
--

CREATE TABLE IF NOT EXISTS `t_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `t_questions`
--

CREATE TABLE IF NOT EXISTS `t_questions` (
`id` int(11) NOT NULL,
  `question` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoryId` int(11) NOT NULL,
  `hide` tinyint(1) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `t_questions`
--

INSERT INTO `t_questions` (`id`, `question`, `author`, `categoryId`, `hide`) VALUES
(10, 'C&#039;est quoi les canvas?', 'Erwann', 1, 1),
(11, 'quelle est lorigine du bluetooth', 'redfish', 1, 1),
(12, 'quel distrib choisir pour le rasperry et quel model ?', 'redfish', 1, 1),
(13, 'c&#039;est quoi le blockchain ?', 'St&eacute;phane', 1, 1),
(14, 'Pourquoi le soleil est jaune ?', 'Youness', 1, 1),
(15, 'la s&eacute;curit&eacute; informatique ?', 'Jean-Patrice', 1, 1),
(17, 'C&rsquo;est quoi un certificat num&eacute;rique ?', 'Juliette', 1, 1),
(18, '  le monde des hackers?', 'Hassan', 1, 1),
(19, 'Comment cr&eacute;er un site e commerce?', 'ghaffar', 1, 1),
(20, 'C&rsquo;est quoi le d&eacute;bit, la latence et la gigue ?', 'Juliette', 1, 1),
(21, 'Quels sont les techniques de mon&eacute;tisation d&#039;un site Web', 'Thomas', 1, 1),
(22, 'la d&eacute;finition de l&rsquo;attribut &lt;alt&gt; ?', 'rasho', 1, 1),
(24, 'Comment Ã§a marche Internet ?', 'Juliette', 1, 1),
(25, 'Quels sont les mÃ©thodes de faisage de pognon de sites Web ?', 'Tyjow', 1, 1),
(27, 'Apres le num&eacute;rique, quelle sera la prochaine r&eacute;volution ?', 'Patrice', 1, 1),
(29, 'Qu&rsquo;est-ce que le cloud ?', 'Juliette', 1, 1),
(30, 'Comment mettre un site en ligne, scrogneugneu ?!', 'Lise (la vraie !)', 1, 1),
(33, 'Comment les sites de torrent gagnent-ils de l&#039;argent ?', 'Thomas', 1, 1),
(34, 'Les syst&egrave;me neuronaux artificiels &ccedil;a marche comment en vrai ??????? (@Ange, si tu veux un Affro, non)', 'Julien pas Vaupr&eacute; mais Malle', 1, 1),
(35, 'Comment Ã§a marche le chiffrement ? (exposÃ© sur Egnima?)', 'Juliette', 1, 1),
(36, 'Connaissez-vous vraiment AlphaGo ?', 'Tyjow', 1, 1),
(37, 'Qu&rsquo;est-ce que la vie, et o&ugrave; trouver la r&eacute;ponse ?!', 'ohmiguel', 1, 1),
(38, 'Quel est le vÃ©ritable sens de la vie ?', 'ohmiguel', 1, 1);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `t_answers`
--
ALTER TABLE `t_answers`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `t_categories`
--
ALTER TABLE `t_categories`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `t_questions`
--
ALTER TABLE `t_questions`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `t_questions`
--
ALTER TABLE `t_questions`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=53;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
