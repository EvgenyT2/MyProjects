package data;

import android.app.Activity;
import android.content.SharedPreferences;

/**
 * Created by tolok on 3/19/2018.
 */

public class CityPreference {
    SharedPreferences prefs;

    public CityPreference(Activity activity) {
        prefs = activity.getPreferences(Activity.MODE_PRIVATE);
    }
    public String getCity() {
        return prefs.getString("city", "Helsinki,FI");
    }
    public void setCity(String city) {
        prefs.edit().putString("city", city).commit();
    }
}
