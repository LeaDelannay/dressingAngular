/*==============================================================*/
/* Nom de SGBD :  MySQL 5.0                                     */
/* Date de creation :  31/03/2019 15:49:37                      */
/*==============================================================*/

CREATE DATABASE IF NOT EXISTS dressing;
USE dressing;

drop table if exists CARACTERISTIQUE;
drop table if exists CARACT_ASSOC;
drop table if exists CATEGORIE;
drop table if exists COULEUR;
drop table if exists COUL_ASSOC;
drop table if exists MARQUE;
drop table if exists NOTE;
drop table if exists OCCASION;
drop table if exists TENUE;
drop table if exists USER;
drop table if exists VET_TEN_ASSOC;
drop table if exists VETEMENT;
drop table if exists VET_CARACT_ASSOC;
drop table if exists VET_COUL_ASSOC;
drop table if exists VET_OCCAS_ASSOC;

/*==============================================================*/
/* Table : CARACTERISTIQUE                                      */
/*==============================================================*/
create table CARACTERISTIQUE
(
   ID_CARACT            Int  Auto_increment  NOT NULL ,
   LIBEL_CARACT         varchar(255),
   primary key (ID_CARACT)
);

INSERT INTO `caracteristique` (`ID_CARACT`, `LIBEL_CARACT`) VALUES
(1, 'Moulant'),
(2, 'Regular'),
(3, 'Large'),
(4, 'Léger'),
(5, 'Chaud');

/*==============================================================*/
/* Table : CARACT_ASSOC                                         */
/*==============================================================*/
create table CARACT_ASSOC
(
   ID_CARACT            int not null,
   CAR_ID_CARACT        int not null,
   primary key (ID_CARACT, CAR_ID_CARACT)
);

/*==============================================================*/
/* Table : CATEGORIE                                            */
/*==============================================================*/
create table CATEGORIE
(
   ID_CAT               Int  Auto_increment  NOT NULL ,
   LIBEL_CAT            varchar(50),
   primary key (ID_CAT)
);

INSERT INTO `categorie` (`ID_CAT`, `LIBEL_CAT`) VALUES
(1, 'Hauts'),
(2, 'Bas'),
(3, 'Echarpes'),
(4, 'Robes'),
(5, 'Chaussures');

/*==============================================================*/
/* Table : COULEUR                                              */
/*==============================================================*/
create table COULEUR
(
   ID_COUL              Int  Auto_increment  NOT NULL ,
   LIBEL_COUL           varchar(50),
   primary key (ID_COUL)
);

/*==============================================================*/
/* Table : COUL_ASSOC                                           */
/*==============================================================*/
create table COUL_ASSOC
(
   ID_COUL              int not null,
   COU_ID_COUL          int not null,
   primary key (ID_COUL, COU_ID_COUL)
);

/*==============================================================*/
/* Table : MARQUE                                               */
/*==============================================================*/
create table MARQUE
(
   ID_MARQUE            Int  Auto_increment  NOT NULL ,
   NOM_MARQUE           varchar(255),
   primary key (ID_MARQUE)
);

/*==============================================================*/
/* Table : NOTE                                                 */
/*==============================================================*/
create table NOTE
(
   ID_NOTE              Int  Auto_increment  NOT NULL ,
   NUM_NOTE             Int(11) NOT NULL,
   primary key (ID_NOTE)
);

INSERT INTO `note` (`ID_NOTE`, `NUM_NOTE`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

/*==============================================================*/
/* Table : OCCASION                                             */
/*==============================================================*/
create table OCCASION
(
   ID_OCCAS             Int  Auto_increment  NOT NULL ,
   LIBEL_OCCAS          varchar(50),
   primary key (ID_OCCAS)
);

INSERT INTO `occasion` (`ID_OCCAS`, `LIBEL_OCCAS`) VALUES
(1, 'Décontractée'),
(2, 'Soirée'),
(3, 'Dimanche'),
(4, 'Travail'),
(5, 'Sport'),
(6, 'Grandes Occasions');

/*==============================================================*/
/* Table : TENUE                                                */
/*==============================================================*/
create table TENUE
(
   ID_TENUE             Int  Auto_increment  NOT NULL ,
   LIBEL_TENUE          varchar(100),
   primary key (ID_TENUE)
);

/*==============================================================*/
/* Table : USER                                                 */
/*==============================================================*/
create table USER
(
   ID_USER              Int  Auto_increment  NOT NULL ,
   PSEUDO_USER          varchar(50),
   LOGIN_USER           varchar(255),
   MDP_USER             varchar(50),
   primary key (ID_USER)
);

INSERT INTO `user` (`ID_USER`, `PSEUDO_USER`, `LOGIN_USER`, `MDP_USER`) VALUES
(1, 'Pumba', 'pumba@ici.fr', 'pumba123');

/*==============================================================*/
/* Table : VET_TEN_ASSOC                                        */
/*==============================================================*/
create table VET_TEN_ASSOC
(
   ID_TENUE             int not null,
   ID_VET               int not null,
   primary key (ID_TENUE, ID_VET)
);

/*==============================================================*/
/* Table : VETEMENT                                             */
/*==============================================================*/
create table VETEMENT
(
   ID_VET               Int  Auto_increment  NOT NULL ,
   FK_ID_CAT               int not null,
   FK_ID_MARQUE            int not null,
   FK_ID_NOTE              int not null,
   FK_ID_USER              int not null,
   NOM_VET              varchar(50),
   IMG_VET              varchar(1000),
   DESCRIPT_VET         varchar(1500),
   primary key (ID_VET)
);

/*==============================================================*/
/* Table : VET_CARACT_ASSOC                                     */
/*==============================================================*/
create table VET_CARACT_ASSOC
(
   ID_VET               int not null,
   ID_CARACT            int not null,
   primary key (ID_VET, ID_CARACT)
);

/*==============================================================*/
/* Table : VET_COUL_ASSOC                                       */
/*==============================================================*/
create table VET_COUL_ASSOC
(
   ID_VET               int not null,
   ID_COUL              int not null,
   primary key (ID_VET, ID_COUL)
);

/*==============================================================*/
/* Table : VET_OCCAS_ASSOC                                      */
/*==============================================================*/
create table VET_OCCAS_ASSOC
(
   ID_VET               int not null,
   ID_OCCAS             int not null,
   primary key (ID_VET, ID_OCCAS)
);

alter table CARACT_ASSOC add constraint FK_CARACT_ASSOC foreign key (CAR_ID_CARACT)
      references CARACTERISTIQUE (ID_CARACT) on delete restrict on update restrict;

alter table CARACT_ASSOC add constraint FK_CARACT_ASSOC2 foreign key (ID_CARACT)
      references CARACTERISTIQUE (ID_CARACT) on delete restrict on update restrict;

alter table COUL_ASSOC add constraint FK_COUL_ASSOC foreign key (COU_ID_COUL)
      references COULEUR (ID_COUL) on delete restrict on update restrict;

alter table COUL_ASSOC add constraint FK_COUL_ASSOC2 foreign key (ID_COUL)
      references COULEUR (ID_COUL) on delete restrict on update restrict;

alter table VET_TEN_ASSOC add constraint FK_VET_TEN_ASSOC foreign key (ID_VET)
      references VETEMENT (ID_VET) on delete restrict on update restrict;

alter table VET_TEN_ASSOC add constraint FK_VET_TEN_ASSOC2 foreign key (ID_TENUE)
      references TENUE (ID_TENUE) on delete restrict on update restrict;

alter table VETEMENT add constraint FK_CONCERNE foreign key (FK_ID_CAT)
      references CATEGORIE (ID_CAT) on delete restrict on update restrict;

alter table VETEMENT add constraint FK_DETIENT foreign key (FK_ID_USER)
      references USER (ID_USER) on delete restrict on update restrict;

alter table VETEMENT add constraint FK_FAIT foreign key (FK_ID_MARQUE)
      references MARQUE (ID_MARQUE) on delete restrict on update restrict;

alter table VETEMENT add constraint FK_POSSEDE foreign key (FK_ID_NOTE)
      references NOTE (ID_NOTE) on delete restrict on update restrict;

alter table VET_CARACT_ASSOC add constraint FK_VET_CARACT_ASSOC foreign key (ID_CARACT)
      references CARACTERISTIQUE (ID_CARACT) on delete restrict on update restrict;

alter table VET_CARACT_ASSOC add constraint FK_VET_CARACT_ASSOC2 foreign key (ID_VET)
      references VETEMENT (ID_VET) on delete restrict on update restrict;

alter table VET_COUL_ASSOC add constraint FK_VET_COUL_ASSOC foreign key (ID_COUL)
      references COULEUR (ID_COUL) on delete restrict on update restrict;

alter table VET_COUL_ASSOC add constraint FK_VET_COUL_ASSOC2 foreign key (ID_VET)
      references VETEMENT (ID_VET) on delete restrict on update restrict;

alter table VET_OCCAS_ASSOC add constraint FK_VET_OCCAS_ASSOC foreign key (ID_OCCAS)
      references OCCASION (ID_OCCAS) on delete restrict on update restrict;

alter table VET_OCCAS_ASSOC add constraint FK_VET_OCCAS_ASSOC2 foreign key (ID_VET)
      references VETEMENT (ID_VET) on delete restrict on update restrict;