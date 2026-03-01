---
title: "Programming your radio with CHIRP"
parent: "Radio Frequencies Info"
nav_order: 1
---
# Programming your radio with CHIRP

Programming your radio using your computer requires a “programming cable” that’s matched to your radio connectors on one end and has a USB connector on the other end to connect your radio to your computer. The cable includes a USB-to-serial converter chip and we recommend you get a cable using converter chip made by “FTDI”. If you use another chip you may need to install additional drivers in your system and may run into more difficulties. We've had good luck with the [BTECH PC03 FTDI Genuine USB Programming Cable from Amazon](https://www.amazon.com/gp/product/B00HUB0ONK) with all models of Baofeng radios.

The program we’re using (and we highly recommend if your radio is supported by it) is[CHIRP](https://chirp.danplanet.com/projects/chirp/wiki/Home). CHIRP is an open source project that’s available to download at no cost for Mac, Windows, and Linux systems. Full information on CHIRP can be found on the[CHIRP Home page](https://chirp.danplanet.com/projects/chirp/wiki/Home). There’s a list of radios compatible with CHIRP, which includes all Baofeng models, a number of Kenwood and Yaesu models, any many others. There's a[CHIRP download page](https://chirp.danplanet.com/projects/chirp/wiki/Download) with instructions and if you’re using it on a Mac you also need to install the[KK7DS Python runtime](http://www.d-rats.com/download/OSX_Runtime/KK7DS_Python_Runtime_R10.pkg) (and reboot your Mac).

What CHIRP basically does is let you operate on a spreadsheet-like table of channel information, listing the label, frequency, offset, tone, etc. information for every channel you want to have available, together with the settings of various features specific to your radio, and then “upload” that information to your radio at any time. You can also save those settings in a data file that matches your radio (a so-called “image file” with a “.bin” extension).

CHIRP can also “import” a list of channel settings from a file (as well as “export” your channel settings to a file for someone else to use). These files (in comma-separated value format with a “.csv” extension) are not specific to any particular radio or model; instead they can be imported for use with any radio.

What we typically do is the following:

1. Turn off your radio and connect the programming cable. Especially on Baofeng radios, make sure the connectors are firmly seated by pressing them in place firmly.
2. Power up your radio. You may not hear the usual power-up announcement - that’s OK.
3. “Download” (“Radio" -> “Download from Radio”) the current radio image. CHIRP will display a dialog like the following:

![](../../files/chrip-radio.png)

4. Find the serial device that corresponds to your programming cable, the radio manufacturer and the radio model in the pop-up dialog; hit “OK"
5. Folow the instructions displayed for your radio:

![](../../files/chirp-ok-box.png)

6. hit “OK” to start the download, which should display a progress dialog that looks like this:

![](../../files/chip-clone.png)

7. You should now see whatever radio channels may have been in your radio at the factory for testing:

![](../../files/chirp-freq-1.png)

8. “Import” (“File” -> “Import”) the “CERT Frequency List.csv” file
9. Select “All” channels to be imported (CHIRP can also import a selected subset of channels:

![](../../files/chirp-freq-2.png)

10. Click OK

You should now see all channels appearing in your channel list in CHIRP:

![](../../files/chirp-freq-3.png)

11. “Upload” the new programming to your radio (“Radio” -> “Upload to Radio”). Follow the instructions shown to prepare your radio.
12. Click OK and follow the instructions displayed

You'll see a "Cloning" dialog while the frequency list and settings are being uploaded to the radio, after which the radio may reset itself. Power your radio off, unplug the programming cable, power your radio back on and you should be ready to go with all your channels programmed.

If you like you can save the complete setup you just uploaded to your radio (“File” -> “Save”) as an “image” file with a “.img” extension. You can open that image file with CHIRP any time in the future and resume where you just left off. Alternatively you can always download a fresh image from your radio and make whatever changes you like later, too.

The “CERT Frequency Info” PDF file attached to this page describes the programming of each channel together with some notes about each (like where the repeater is located, and what its specific capabilities are). The most important repeater is W6PIY. It’s accessible on 2-meters (VHF, channel 1, “W6PIY-2”) and 70 cm. (UHF, channel 2, “W6PIY-7”). Channels 3, 4, and 5 are the local tactical channels for Los Gatos/Monte Sereno used by CERT and ARES/RACES (AR-TAC1, AR-TAC2, and AR-TAC3). Channel 6 (“W6PIY-R”) is W6PIY “reversed” - you’re transmitting as if you’re the repeater and listening to what others send on the repeater’s input. Handy if W6PIY is not working and you want to let people know who are trying to use it. Finally there’s W6PIY-S which is “simplex” on W6PIY’s output - anyone expecting to use W6PIY can hear it if they’re in range, even if W6PIY is not working, and you’re hearing what W6PIY sends out as well.

Besides that there are some other local area repeaters(AA6BT, W6ASH (2m and 70 cm), N6NAC, W6TI, K6FB (2m. and 70 cm.), WB6ZVW, K6SNY, and N6NFI.

There are also the Red Cross channels in ch. 18-24 (all starting with “RC-“), other local area repeaters in neighboring towns (AB6VS and LMPT-2 in Loma Prieta, K6SA and WR6ABD in Saratoga, W6RCA and in Los Gatos, local law enforcement frequencies, and the full complement of FRS and GMRS frequencies used by many small hand-held “walkie talkies” popular today. Note that your radio may be capable of broadcasting on FRS or GMRS channels but that’s not legal without a GMRS license and proper FRS/GMRS equipment and should be used only in an emergency.

Good luck! There’s a [How To Get Help](https://chirp.danplanet.com/projects/chirp/wiki/How_To_Get_Help) page and complete [Documentation for CHIRP](https://chirp.danplanet.com/projects/chirp/wiki/Documentation).
