---
title: Resilient Multi-Robot Integrity Monitoring
summary: Distributed methods for detecting faults and malicious information in networked autonomous systems using inter-robot measurements.
order: 1
tags: [Multi-Robot Systems, Decentralized Systems, Fault Detection]
relatedPublications: [vijay-2025-multi-robot-integrity, vijay-2025-ms-thesis]
---

## Overview

This project develops anchor-free integrity monitoring for multi-robot systems using inter-robot range measurements. It addresses the detection of cyberattacks or faults, identification of affected robots, and reconstruction of their localization errors.

## Problem

Faulty sensors and compromised communication can disrupt both individual robots and a coordinated team's objective. Monitoring must work without requiring trusted anchors or a central coordinator.

## Approach

An iterative, distributed algorithm combines sequential convex programming with the alternating direction method of multipliers to infer errors from range measurements shared among robots.

## Results / Demonstration

The method is evaluated in numerical simulations and PX4 software-in-the-loop experiments in Gazebo involving GNSS spoofing. Mixed-reality experiments combine physical Crazyflie UAVs with virtual PX4 vehicles to study interoperability and scalability.
