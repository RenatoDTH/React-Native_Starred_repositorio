# React-Native_Starred_repositorio
Fundamentos de react-native, ensinado pela RocketSeat, onde você consegue adicionar usuários do Github na página Main, e ao acessar detalhes, verificar as páginas favoritas.

Para você conseguir rodar o aplicativo, primeiramente você precisa se certificar de ter baixado e configurado um emulador.
O guia da [RocketSeat](https://react-native.rocketseat.dev/android/windows) irá ajudá-lo a configurar o emulador.

Na sequência, você precisa instalar as dependências do projeto com:

```
yarn install

```
e para rodar a aplicação você precisa, obrigatoriamente, depois de tudo configurado e funcionando (inclusive emulador ligado), usar na primeira vez e sempre que houver grandes alterações: 

```
yarn react-native run-android
ou
yarn react-native run-ios
```
Variando obviamente de dispositivo para dispositivo.

Depois de instalado o app no emulador, você pode utilizar:
```
yarn react-native start
```

Para debuggar, foi usado o aplicativo externo [Reactotron](https://github.com/infinitered/reactotron) e caso este não esteja conectando com a aplicação android, você precisa rodar no path do SDK:
```
adb reverse tcp:9090 tcp:9090
```
