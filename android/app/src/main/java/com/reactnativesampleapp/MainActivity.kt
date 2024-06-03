package com.reactnativesampleapp

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactRootView
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView

class MainActivity : ReactActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(null)
    }
    
    override fun getMainComponentName(): String? {
        return "ReactNativeSampleApp"
    }
}
