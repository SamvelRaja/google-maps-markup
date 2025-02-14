import MapLabel from './map-label';
import featureCenter from './feature-center';
import getMeasurement from './get-measurement';

export default function initMeasureLabel(result, map) {
  if (!result) {
    return;
  }

  if (result.mode === 'measure') {
    let center = featureCenter(result.feature);
    let measurement = getMeasurement(result.type, result.feature);
    result.label = new MapLabel(center, {
      defaultLabel: `${measurement.value} ${measurement.unit}`
    });

    if (map) {
      result.label.setMap(map);
    }
  }
}
