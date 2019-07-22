import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AppConfigurationToken} from '../../configuration/app-configuration.token';
import {IConfiguration} from '../../configuration/configuration';
import {ICoordonnees, IInformationsConseiller} from '../../types/pe-types';

@Injectable()
export class IndividuService {
	constructor(private http: HttpClient, @Inject(AppConfigurationToken) public appConfiguration: IConfiguration) {}

	getCoordonneesIndividu(): Observable<ICoordonnees> {
		return this.http.get<ICoordonnees>(this.appConfiguration.rest.ex002.individu);
	}

	getCodeSaphir(): Observable<IInformationsConseiller> {
		return this.http.get<IInformationsConseiller>(this.appConfiguration.rest.ex002.conseiller);
	}
}
