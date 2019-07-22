import {HttpClient, HttpParams} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {AppConfigurationToken} from '../../configuration/app-configuration.token';
import {IConfiguration} from '../../configuration/configuration';

export interface Pilote {
	codeApplication: string;
	codeService: string;
	etatFonctionnalite: boolean;
	libelleService: string;
}

@Injectable()
export class PiloteService {
	constructor(private http: HttpClient, @Inject(AppConfigurationToken) public appConfiguration: IConfiguration) {}

	getEtatService(application: string, service: string): Observable<boolean> {
		return this.http
			.get(this.appConfiguration.rest.ex040.service, {
				params: new HttpParams().set('application', application).set('service', service),
				headers: {'pe-cache': 'true'}
			})
			.pipe(map((pilote: Pilote) => pilote.etatFonctionnalite));
	}

	getEtatPilote(departement: string, application: string, service: string): Observable<boolean> {
		return this.http
			.get(this.appConfiguration.rest.ex040.pilote, {
				params: new HttpParams()
					.set('application', application)
					.set('service', service)
					.set('departement', departement)
			})
			.pipe(map((pilote: Pilote) => pilote.etatFonctionnalite));
	}
}
