# gaelscout

## Cloning
1) run `git clone https://github.com/5327K/GaelsKout.git`.
2) go to the directory (`cd GaelsKout`) and run `npm i` (install all dependecies)
3) make sure `expo-cli` is installed **globally** (`npm i -g expo-cli`)
4) make a file, `.env`, in the root directory, and set `ROBOTS_API_KEY` equal to your API key for the RobotEvents API. 
5) run! (see below)

## Running

This uses `tailwind-rn`, so in development, make two terminals, one running `npm run dev:tailwind`, and the other running `npm run android` (or `ios`). **MAKE SURE TO RELOAD EVERY TIME YOU SEE THE ERROR "Unsupported Tailwind class" (press `r`)!!**

Commands to run (for my reference; run these in seperate terminals)

```bash
# NOTE: the below command will be different based on which emulator is installed. Run
# emulator -list-avds to find all AVDs installed.
emulator -avd Samsung_Galaxy_Note_8_API_32 # runs the android emulator
npm run dev:tailwind # runs the tailwind server
npm run android # runs the expo server to serve on android
```

**THIS HAS ONLY BEEN TESTED ON ANDROID!** (someone test on ios when? I don't have an iphone lol)
