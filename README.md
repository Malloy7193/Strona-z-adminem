# Zaawansowana strona + panel Discord

Projekt wymaga Node.js 20+ i hostingu obsługującego Node.js.

## Uruchomienie
1. Zainstaluj Node.js.
2. Skopiuj `.env.example` jako `.env`.
3. Utwórz aplikację na https://discord.com/developers/applications
4. W OAuth2 dodaj Redirect URI, np. `http://localhost:3000/auth/discord/callback`.
5. Wpisz Client ID, Client Secret i Redirect URI do `.env`.
6. W `ADMIN_USER_IDS` wpisz swój Discord User ID. Możesz wpisać kilka ID oddzielonych przecinkami.
7. Opcjonalnie ustaw `DISCORD_GUILD_ID` i `DISCORD_ADMIN_ROLE_ID`, aby dodatkowo wymagać członkostwa i konkretnej roli.
8. Wygeneruj `SESSION_SECRET`, np. `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"`.
9. Uruchom `npm install`, potem `npm start`.
10. Panel: `/admin`.

## Edycja
Po zalogowaniu otwórz `/admin/editor`. Możesz tam zmieniać cały plik danych strony bez otwierania HTML/CSS.

## Bezpieczeństwo
Projekt ma Helmet, rate limiting, HttpOnly/SameSite cookie, OAuth state, CSRF dla operacji administracyjnych, walidację formularza i whitelistę Discord ID. W produkcji używaj HTTPS i nigdy nie publikuj `.env`.

## Hosting
GitHub Pages nie wystarczy, bo strona ma backend Node.js. Potrzebny jest hosting obsługujący Node.js i zmienne środowiskowe.
