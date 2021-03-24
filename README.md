# aquasoft_angular_task3

Task-ul urmator presupune research pentru conceptele de baza din Angular, pe care este important sa le stiti:

- Ce sunt directivele + exemple
- Care este diferenta dintre o componenta si o directiva
- Ce este un template?
- Ce este un service? 
- Cum se face requestul catre backend in Angular?
- cum se face dependency injection (pentru serviciu in componenta)
- ce este un modul?
- lifecycle methods
- ngFor, ngIf
- interpolation
- HttpClient
- angular routing + routing events
- data binding types
- Observable vs Promise (ce sunt, diferente, cum se foloseste fiecare in service si in componenta) 
- operatori rxjs

Aceasta este documentatia oficiala, cuprinde mai jos si un tutorial Tour of Heroes care v-ar putea fi de folos: https://angular.io/docs

In vederea exersarii acestor concepte, veti crea un proiect Angular cu urmatoarele cerinte:
1. Crearea componentei Projects si includerea acesteia in AppComponent
2. Crearea serviciului pentru componenta Projects
3. In serviciu, prin HttpClient sa se faca request catre backend pentru ruta GET a proiectelor
4. Sa se apeleze in componenta metoda din serviciu care aduce proiectele si sa se stocheze rezultatul intr-un array definit.
5. In html-ul aferent componentei Projects sa se creeze un tabel care sa afiseze elementele din array-ul de proiecte. (cu ngFor). Se recomanda instalarea de Bootsrap si stilizarea minima a tabelului.
6. Crearea componentei Employees si a serviciului corespunzator.
7. Eliminarea din AppComponent a componentei projects, instalarea Angular Routing si crearea rutelor catre cele doua componente. Ruta default ('/') sa includa componenta Projects.
8. Pentru a testa aceste 2 rute, crearea unui meniu simplu care sa includa 2 butoane (Projects, Employees) pentru a permite navigarea intre componente.
9. In serviciul pentru employees sa se faca request catre backend pentru ruta GET a angajatilor.
10. Similar cu proiectele, rezultatul sa fie stocat intr-un array in componenta si sa fie afisat intr-un tabel html.
11. Sa se creeze in tabelul Emplooyees inca 2 coloane pentru edit, delete.
12. Crearea in serviciu a metodelor aferente pentru edit si delete (request catre rutele de pe backend)
13. La apasarea pe butonul delete, sa se stearga atat din baza de date, cat si in real time din tabel (cu indexOf, splice)
14. La apasarea pe butonul edit, sa se editeze atat in baza de date, cat si in real time.

