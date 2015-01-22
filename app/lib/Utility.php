<?php

class Utility {

    /**
     * returns an array with only needed columns
     *
     * @todo preserve keys param, chk if isset or not
     * @param array $array
     * @param array $columns
     *
     * @return array
     */
    public static function stdArrayToPlainArray(array $array, array $columns)
    {
        $result = [];

        foreach ($array as $row) {
            $tmp = [];
            foreach ($columns as $column) {
                $tmp[$column] = $row->$column;
            }
            $result[] = $tmp;
        }

        return $result;
    }
}