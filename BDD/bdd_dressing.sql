/*==============================================================*/
/* Nom de SGBD :  PostgreSQL 8                                  */
/* Date de creation :  29/04/2019 20:06:00                      */
/*==============================================================*/

/*==============================================================*/
/* Table : CARACTERISTIQUE                                      */
/*==============================================================*/
create table CARACTERISTIQUE (
   ID_CARACT            SERIAL               not null,
   LIBEL_CARACT         VARCHAR(255)         null,
   constraint PK_CARACTERISTIQUE primary key (ID_CARACT)
);

/*==============================================================*/
/* Table : CARACT_ASSOC                                         */
/*==============================================================*/
create table CARACT_ASSOC (
   ID_CARACT            INT4                 not null,
   CAR_ID_CARACT        INT4                 not null,
   constraint PK_CARACT_ASSOC primary key (ID_CARACT, CAR_ID_CARACT)
);

/*==============================================================*/
/* Table : CATEGORIE                                            */
/*==============================================================*/
create table CATEGORIE (
   ID_CAT               SERIAL               not null,
   LIBEL_CAT            VARCHAR(50)          null,
   constraint PK_CATEGORIE primary key (ID_CAT)
);

/*==============================================================*/
/* Table : VET_COUL_ASSOC                                       */
/*==============================================================*/
create table VET_COUL_ASSOC (
   ID_VET               INT4                 not null,
   ID_COUL              INT4                 not null,
   constraint PK_VET_COUL_ASSOC primary key (ID_VET, ID_COUL)
);

/*==============================================================*/
/* Table : COULEUR                                              */
/*==============================================================*/
create table COULEUR (
   ID_COUL              SERIAL               not null,
   LIBEL_COUL           VARCHAR(50)          null,
   constraint PK_COULEUR primary key (ID_COUL)
);

/*==============================================================*/
/* Table : COUL_ASSOC                                           */
/*==============================================================*/
create table COUL_ASSOC (
   ID_COUL              INT4                 not null,
   COU_ID_COUL          INT4                 not null,
   constraint PK_COUL_ASSOC primary key (ID_COUL, COU_ID_COUL)
);

/*==============================================================*/
/* Table : MARQUE                                               */
/*==============================================================*/
create table MARQUE (
   ID_MARQUE            SERIAL               not null,
   NOM_MARQUE           VARCHAR(255)         null,
   constraint PK_MARQUE primary key (ID_MARQUE)
);

/*==============================================================*/
/* Table : NOTE                                                 */
/*==============================================================*/
create table NOTE (
   ID_NOTE              SERIAL               not null,
   NUM_NOTE             FLOAT4               null,
   constraint PK_NOTE primary key (ID_NOTE)
);

/*==============================================================*/
/* Table : OCCASION                                             */
/*==============================================================*/
create table OCCASION (
   ID_OCCAS             SERIAL               not null,
   LIBEL_OCCAS          VARCHAR(50)          null,
   constraint PK_OCCASION primary key (ID_OCCAS)
);

/*==============================================================*/
/* Table : TENUE                                                */
/*==============================================================*/
create table TENUE (
   ID_TENUE             SERIAL               not null,
   LIBEL_TENUE          VARCHAR(100)         null,
   constraint PK_TENUE primary key (ID_TENUE)
);

/*==============================================================*/
/* Table : "USER"                                               */
/*==============================================================*/
create table "USER" (
   ID_USER              SERIAL               not null,
   PSEUDO_USER          VARCHAR(50)          null,
   LOGIN_USER           VARCHAR(255)         null,
   MDP_USER             VARCHAR(50)          null,
   constraint PK_USER primary key (ID_USER)
);

/*==============================================================*/
/* Table : VAT_TEN_ASSOC                                        */
/*==============================================================*/
create table VAT_TEN_ASSOC (
   ID_TENUE             INT4                 not null,
   ID_VET               INT4                 not null,
   constraint PK_VAT_TEN_ASSOC primary key (ID_TENUE, ID_VET)
);

/*==============================================================*/
/* Table : VETEMENT                                             */
/*==============================================================*/
create table VETEMENT (
   ID_VET               SERIAL               not null,
   ID_CAT               INT4                 not null,
   ID_NOTE              INT4                 not null,
   ID_USER              INT4                 not null,
   NOM_VET              VARCHAR(50)          null,
   IMG_VET              VARCHAR(1000)        null,
   DESCRIPT_VET         VARCHAR(1500)        null,
   constraint PK_VETEMENT primary key (ID_VET)
);

/*==============================================================*/
/* Table : VET_CARACT_ASSOC                                     */
/*==============================================================*/
create table VET_CARACT_ASSOC (
   ID_VET               INT4                 not null,
   ID_CARACT            INT4                 not null,
   constraint PK_VET_CARACT_ASSOC primary key (ID_VET, ID_CARACT)
);

/*==============================================================*/
/* Table : VET_OCCAS_ASSOC                                      */
/*==============================================================*/
create table VET_OCCAS_ASSOC (
   ID_VET               INT4                 not null,
   ID_OCCAS             INT4                 not null,
   constraint PK_VET_OCCAS_ASSOC primary key (ID_VET, ID_OCCAS)
);

alter table CARACT_ASSOC
   add constraint FK_CARACT_A_CARACT_AS_CARACTER foreign key (CAR_ID_CARACT)
      references CARACTERISTIQUE (ID_CARACT)
      on delete restrict on update restrict;

alter table CARACT_ASSOC
   add constraint FK_CARACT_A_CARACT_AS_CARACTER2 foreign key (ID_CARACT)
      references CARACTERISTIQUE (ID_CARACT)
      on delete restrict on update restrict;

alter table VET_COUL_ASSOC
   add constraint FK_VET_COUL_ASS_VET_COUL_ASSO_COULEUR foreign key (ID_COUL)
      references COULEUR (ID_COUL)
      on delete restrict on update restrict;

alter table VET_COUL_ASSOC
   add constraint FK_VET_COUL_ASS_VET_COUL_ASSO2_VETEMENT foreign key (ID_VET)
      references VETEMENT (ID_VET)
      on delete restrict on update restrict;

alter table COUL_ASSOC
   add constraint FK_COUL_ASS_COUL_ASSO_COULEUR foreign key (COU_ID_COUL)
      references COULEUR (ID_COUL)
      on delete restrict on update restrict;

alter table COUL_ASSOC
   add constraint FK_COUL_ASS_COUL_ASSO_COULEUR2 foreign key (ID_COUL)
      references COULEUR (ID_COUL)
      on delete restrict on update restrict;

alter table VAT_TEN_ASSOC
   add constraint FK_VAT_TEN__VAT_TEN_A_VETEMENT foreign key (ID_VET)
      references VETEMENT (ID_VET)
      on delete restrict on update restrict;

alter table VAT_TEN_ASSOC
   add constraint FK_VAT_TEN__VAT_TEN_A_TENUE foreign key (ID_TENUE)
      references TENUE (ID_TENUE)
      on delete restrict on update restrict;

alter table VETEMENT
   add constraint FK_VETEMENT_CONCERNE_CATEGORI foreign key (ID_CAT)
      references CATEGORIE (ID_CAT)
      on delete restrict on update restrict;

alter table VETEMENT
   add constraint FK_VETEMENT_DETIENT_USER foreign key (ID_USER)
      references "USER" (ID_USER)
      on delete restrict on update restrict;

alter table VETEMENT
   add constraint FK_VETEMENT_POSSEDE_NOTE foreign key (ID_NOTE)
      references NOTE (ID_NOTE)
      on delete restrict on update restrict;

alter table VET_CARACT_ASSOC
   add constraint FK_VET_CARA_VET_CARAC_CARACTER foreign key (ID_CARACT)
      references CARACTERISTIQUE (ID_CARACT)
      on delete restrict on update restrict;

alter table VET_CARACT_ASSOC
   add constraint FK_VET_CARA_VET_CARAC_VETEMENT foreign key (ID_VET)
      references VETEMENT (ID_VET)
      on delete restrict on update restrict;

alter table VET_OCCAS_ASSOC
   add constraint FK_VET_OCCA_VET_OCCAS_OCCASION foreign key (ID_OCCAS)
      references OCCASION (ID_OCCAS)
      on delete restrict on update restrict;

alter table VET_OCCAS_ASSOC
   add constraint FK_VET_OCCA_VET_OCCAS_VETEMENT foreign key (ID_VET)
      references VETEMENT (ID_VET)
      on delete restrict on update restrict;