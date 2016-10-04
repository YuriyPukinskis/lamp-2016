
Задания
1. Установить Git https://git-scm.com/downloads

2. Клонировать репозиторий https://github.com/cathedra/lamp-2016/

При появлении ошибки `error: error setting certificate verify locations:` необходимо указать путь к SSL серитификатам:
```sh
git config --system http.sslcainfo "C:\Program Files (x86)\git\bin\curl-ca-bundle.crt"
```
Или (не рекомендуется, отключает проверку сертификатов):
```sh
git config --system http.sslverify false
```

3. В каталоге solutions создать подкаталог со своим именем и фамилией (англ.), всю дальнейшую работу вести в нем, не забывая делать git commit и git push

4. Установить node и npm 
4.1. node
  https://nodejs.org -> Download -> All download options -> win-x64 -> node.exe, node.lib
                                                         -> win-x86 -> node.exe, node.lib
                                                                                                                  
4.2. Запуск                                                       
Задания и примеры размещаются в каталоге `assignments/`
```
$ node ex1_file.js
$ node ex2_freq_begin.js
```

5. Сгенерировать файл формата `.raw` с частотой дискретизации 8000Гц и звуком частотой 425 Гц
 Посмотреть спектр (Audacity -> Analyze -> Plot Specturm...)
 Aydacity можно взять здесь: http://www.audacityteam.org/download/windows/ (нужен zip-file, не installer)
 Изменить частоту дискретизации на 44100Гц, посмотреть спектр еще раз.
 Что видно, чем объясняются отличия.
 
6. Сгенерировать файл с частотами `DTMF` '12345' (либо другими, на выбор), длительностью 0.5с каждая.

7. Сгенерировать файл с любой последовательностью музыкальных нот

================================================================================

ПРИМЕЧАНИЕ
npm используется для установки дополнительных модулей:

Установка npm
https://nodejs.org/dist/npm/ -> npm-1.4.9.zip
  
Инициализировать package.json
`$ npm init`

Установка модуля
`$ npm install <имя_модуля> --save`


